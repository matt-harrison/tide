<script lang="ts" setup>
  import { computed } from 'vue';

  import type { Alert } from '@/types/Alert';
  import type { Icon } from '@/types/Icon';

  import TideIcon from '@/components/TideIcon.vue';
  import TideButtonIcon from '@/components/TideButtonIcon.vue';
  import { ALERT } from '@/types/Alert';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';

  type Props = {
    heading?: string;
    isToast?: boolean;
    type?: Alert;
  };

  const props = withDefaults(defineProps<Props>(), {
    heading: undefined,
    isToast: false,
    type: ALERT.INFO,
  });

  const icon = computed(() => {
    let icon: Icon = ICON.VIEW_IN_AR;

    switch (props.type) {
      case ALERT.ERROR:
        icon = ICON.ERROR;
        break;
      default:
      case ALERT.INFO:
        icon = ICON.INFO;
        break;
      case ALERT.SUCCESS:
        icon = ICON.CHECK;
        break;
      case ALERT.WARNING:
        icon = ICON.VIEW_IN_AR;
        break;
    }

    return icon;
  });
</script>

<template>
  <div :class="[props.type, 'basic-alert tide-display-grid tide-radius-1/2 tide-padding-1']">
    <div class="basic-alert-icon tide-display-flex tide-axis2-center">
      <TideIcon
        :class="[props.type, 'tide-radius-full tide-padding-1/2 tide-font-on-surface-inverse']"
        :icon="icon"
      />
    </div>

    <div class="basic-alert-heading tide-display-flex tide-axis2-center">
      <h2 class="tide-font-16 tide-font-600 tide-font-on-surface">{{ props.heading }}</h2>
    </div>

    <TideButtonIcon
      :icon="ICON.CLOSE"
      :priority="PRIORITY.QUATERNARY"
      class="basic-alert-close tide-display-flex tide-axis2-center tide-font-on-surface"
    />

    <div class="basic-alert-body tide-font-500 tide-font-on-surface-variant">
      <slot />
    </div>
  </div>
</template>

<style>
  .basic-alert {
    grid-template-areas:
      'icon heading close'
      '. body .';
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 0.5rem;
  }

  .basic-alert-icon {
    grid-area: icon;
  }

  .basic-alert-heading {
    grid-area: heading;
  }

  .basic-alert-close {
    grid-area: close;
  }

  .basic-alert-body {
    grid-area: body;
  }

  .error {
    background-color: var(--error-surface);
  }

  .info {
    background-color: var(--info-surface);
  }

  .success {
    background-color: var(--success-surface);
  }

  .warning {
    background-color: var(--warning-surface);
  }

  .basic-icon.error {
    background-color: var(--error-primary);
  }

  .basic-icon.info {
    background-color: var(--info-primary);
  }

  .basic-icon.success {
    background-color: var(--success-primary);
  }

  .basic-icon.warning {
    background-color: var(--warning-primary);
  }
</style>