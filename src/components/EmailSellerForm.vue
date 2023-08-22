<script lang="ts" setup>
  import { ref, computed } from 'vue';

  import type { VehicleDetail } from '@/types/VehicleDetail';

  import BasicButton from '@/components/BasicButton.vue';
  import BasicCheckbox from '@/components/BasicCheckbox.vue';
  import BasicTextInput from '@/components/BasicTextInput.vue';
  import BasicTextarea from '@/components/BasicTextarea.vue';
  import dummyEmailFormFields from '@/data/dummy-emailform-fields.json';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_BUTTON } from '@/types/Size';
  import { formatSentenceCase } from '@/utilities/format';
  import { getVehicleTitle } from '@/utilities/vehicle';
  import { submitEmailSellerForm } from '@/utilities/leads';
  import { useViewportStore } from '@/stores/ViewportStore';

  type Props = {
    vehicle: VehicleDetail;
  };

  const props = defineProps<Props>();

  const emailFormData = ref(dummyEmailFormFields);
  const textAreaMessage = computed(() => dummyEmailFormFields.textAreaMessage ?? '');
  const fields = computed(() => emailFormData.value.fields ?? []);
  const recaptchaKey = (document as any).getElementById('recaptchaKey')?.value;
  const recaptcha = ref();
  const showRecaptcha = ref(false);
  const isSubmitting = ref(false);
  const viewportStore = useViewportStore();
  const { isExtraSmall, isSmall, isMedium } = viewportStore;

  const handleSubmit = async (e: any) => {
    // TODO: get current realmId from the realm config
    const realmId = 3 as any;
    // I only added this to replicate the TOL submitEmail logic for video leads
    // TODO: make the isVideoChatLead actually do something
    const isVideoChatLead = false as any;
    let errorMessage = '';
    const interestOptions = [] as string[];
    const formData = new FormData(e.target);
    const contactTime = String(formData.get('contact_time'));

    isSubmitting.value = true;

    // if #issue is "Other" then #reason is required
    if (formData.get('issue') === 'Other') {
      e.target.querySelector('[name="reason"]')?.setAttribute('required', true);
    }

    let source = 'PORTAL-AD';
    // TODO: verify this adequitely matches the TOL logic
    if (isExtraSmall || isSmall) {
      source = 'mobile';
    } else if (isMedium) {
      source = 'tablet';
    }

    // == loop thru all formData ==
    formData.forEach((value, key) => {
      const element = e.target.querySelector(`[name="${key}"]`) as HTMLInputElement;
      const isRequired = element?.hasAttribute('required');
      const defaultValue = element?.getAttribute('defaultValue');
      const validation = element?.getAttribute('validation');

      // For required inputs without values:
      if (isRequired && !value) {
        // - if the defaultValue attribute is not undefined, output error message saying `${$(this).attr('defaultValue')} is required.\n`
        if (defaultValue) {
          errorMessage += `${defaultValue} is required.\n`;
        }
        // - else output an error message saying `${name} is required`
        else {
          errorMessage += `${key} is required.\n`;
        }
      }
      // For inputs with a `validation` attribute:
      else if (validation) {
        // - if the value does not match regex, and input is required or has a value:
        if (((window as any).$(element).val().trim().search(`^${validation}$`) === -1 && isRequired) || value) {
          //   - if the defaultValue attribute is not undefined, output error message saying `${$(this).attr('defaultValue')} is invalid.\n`
          if (defaultValue) {
            errorMessage += `${defaultValue} is invalid.\n`;
          }
          //   - else output an error message saying `${name} is invalid`
          else {
            errorMessage += `${key} is invalid.\n`;
          }
        }
      }
      // For checkboxes:
      // - if it is the interestOptions[] input and is checked, add to interestOptions array
      else if (element?.type === 'checkbox' && element?.checked) {
        if (key === 'interestOptions[]') {
          interestOptions.push(String(value));
        }
      }
      // - else add to the POST data as { [name]: value as boolean }
      // TODO: do this
    });

    // == end loop ==

    // set `contactInfo` cookie with { phone, email, first_name, last_name }
    const persistentData = {
      email: String(formData.get('email')),
      first_name: String(formData.get('first_name')),
      full_name: String(formData.get('full_name')),
      last_name: String(formData.get('last_name')),
      phone: String(formData.get('phone')),
    };
    // TODO: move to a nice cookie utility function
    const cookieName = 'contactInfo';
    const cookieValue = JSON.stringify(persistentData);
    const expirationDays = 30;
    const today = new Date();
    const expires = today.setTime(today.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; path=/; SameSite=Lax; Secure}`;

    // if the previous steps generated any errors, alert() the message
    if (errorMessage) {
      alert(errorMessage);
      isSubmitting.value = false;
      return;
    }
    // else
    else {
      // run goog_report_emailseller() or equivalent google analytics function
      (window as any).goog_report_emailseller();

      // - do custom formData generation for the current lead's `method` (EmailSeller, EmailFriend, TradeIn, GetBestPrice, GetTradeInValue, reportfraud)

      let message = '';
      // - if contact_time field has a value and realm id is 4 and it's not a videoChat lead, the following should be the value of formData.message:
      //   - "Hello, I am interested in your (year make model). - Please contact me {contact_time}. {additionalComments ? additionalComments : ''}"
      if (typeof contactTime !== 'undefined' && realmId === 4 && !isVideoChatLead) {
        message = `Hello, I am interested in your ${getVehicleTitle(
          props.vehicle
        )}. - Please contact me ${contactTime}.}`;
        if (String(formData.get('message'))) {
          message += ` ${String(formData.get('message'))}`;
        }
      }

      const emailFormData = {
        email: String(formData.get('email')),
        firstName: String(formData.get('first_name')),
        interestOptions: interestOptions,
        lastName: String(formData.get('last_name')),
        message: message,
        phone: String(formData.get('phone')),
        recaptchaResponse: String(formData.get('g-recaptcha-response')),
        source: source,
      };

      // - perform axios post to the appropriate endpoint with formData
      const response: any = await submitEmailSellerForm(emailFormData, props.vehicle);
      console.log('EmailSellerForm submitted', response);

      isSubmitting.value = false;

      // on response:
      // - if data.Errors.length === 0:
      if (response.Errors.length === 0) {
        // show success message
        alert('Email sent successfully!');
        // - if lead is a videoChat lead
        if (isVideoChatLead) {
          //   - get requestedVideoChats from sessionStorage, if null initialize with []
          let currentRequests = JSON.parse(sessionStorage.getItem('requestedVideoChats') ?? '');
          if (currentRequests === null) {
            currentRequests = [];
          }
          //   - push the current listing's adId to the array
          currentRequests.push(props.vehicle.id);
          //   - set sessionStorage.requestedVideoChats to the updated array
          sessionStorage.setItem('requestedVideoChats', JSON.stringify(currentRequests));
          //   - show a happy "Video chat requested" message with a check mark
          alert('Video chat requested!');
        }
        // - `do TOL.Module.gtmHelper.pushEmailSeller();`
        // @ts-ignore
        TOL.Module.gtmHelper.pushEmailSeller();
        // - show the addetail_emailsentpage tile in a modal which has a nice button to subscribe to price change alerts
        alert('email was sent successfully! (pretend this is the addetail_emailsentpage tile)');
      } else {
        const serverErrors = response.Errors.join('\n');
        alert(serverErrors);
      }
    }
  };

  const addRecaptcha = () => {
    if (showRecaptcha.value) return;
    (window as any).grecaptcha.render(recaptcha.value, { siteKey: recaptchaKey });
    showRecaptcha.value = true;
  };
</script>

<template>
  <form
    @focusin="addRecaptcha"
    @mouseenter="addRecaptcha"
    @submit.prevent="handleSubmit"
    class="lead-form flex column gap-1/2"
  >
    <template
      :key="field.name"
      v-for="field in fields"
    >
      <input
        :name="field.field"
        :value="field.value"
        type="hidden"
        v-if="field.type === 'hidden'"
      />

      <BasicTextInput
        :label="formatSentenceCase(field.field)"
        :name="field.field"
        :type="field.type"
        :value="field.value ?? undefined"
        v-else-if="field.type === 'text' || field.type === 'email' || field.type === 'tel'"
      />
    </template>

    <BasicTextarea
      :value="textAreaMessage"
      name="message"
    />

    <Transition>
      <div
        class="flex column axis2-start gap-1/2 font-12 font-surface-variant"
        v-show="showRecaptcha"
      >
        <BasicCheckbox
          id="additionalPhotos"
          label="Request additional photos"
          name="additionalPhotos"
          type="checkbox"
        />

        <BasicCheckbox
          id="additionalVideos"
          label="Request a video"
          name="additionalVideos"
          type="checkbox"
        />

        <BasicCheckbox
          id="newsletter"
          label="Include me on exclusive offers, giveaways, and our monthly newsletter"
          name="newsletter"
          type="checkbox"
        />

        <div
          :data-sitekey="recaptchaKey"
          ref="recaptcha"
          class="g-recaptchaBtm mx-auto mt-2 flex axis1-center"
        />
      </div>
    </Transition>

    <BasicButton
      :disabled="isSubmitting"
      :label="isSubmitting ? 'Submitting' : 'Send'"
      :priority="PRIORITY.PRIMARY"
      :size="SIZE_BUTTON.LARGE"
      type="submit"
    />
  </form>
  <p class="font-12 font-surface-variant mt-1">
    Stay safe. Read more about avoiding scams and protecting your money. By using this site, you agree to our Terms of
    Use & our Privacy Policy.
  </p>
</template>

<style scoped></style>
