<script lang="ts" setup>
  import { computed } from 'vue';

  import type { Alert } from '@/types/Alert';
  import type { Icon } from '@/types/Icon';

  import TideIcon from '@/components/TideIcon.vue';
  import TideButtonIcon from '@/components/TideButtonIcon.vue';
  import { ALERT } from '@/types/Alert';
  import { CSS } from '@/types/Styles';
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
        icon = ICON.WARNING;
        break;
    }

    return icon;
  });
</script>

<template>
  <div
    :class="[
      props.type,
      'tide-alert',
      CSS.DISPLAY.GRID,
      CSS.BORDER.RADIUS.HALF,
      CSS.PADDING.FULL.ONE,
      props.type === ALERT.ERROR && CSS.BG.SURFACE.ERROR,
      props.type === ALERT.INFO && CSS.BG.SURFACE.INFO,
      props.type === ALERT.SUCCESS && CSS.BG.SURFACE.SUCCESS,
      props.type === ALERT.WARNING && CSS.BG.SURFACE.WARNING,
      props.isToast ? CSS.SHADOW.BOTTOM : '',
    ]"
  >
    <div :class="['tide-alert-icon', CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER]">
      <TideIcon
        :class="[
          props.type,
          CSS.BORDER.RADIUS.FULL,
          CSS.PADDING.FULL.HALF,
          CSS.FONT.COLOR.SURFACE.INVERSE,
          props.type === ALERT.ERROR && CSS.BG.ERROR,
          props.type === ALERT.INFO && CSS.BG.INFO,
          props.type === ALERT.SUCCESS && CSS.BG.SUCCESS,
          props.type === ALERT.WARNING && CSS.BG.WARNING,
        ]"
        :icon="icon"
      />
    </div>

    <div :class="['tide-alert-heading', CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER]">
      <h2 :class="[CSS.FONT.SIZE.SIXTEEN, CSS.FONT.WEIGHT.SIX_HUNDRED, CSS.FONT.COLOR.SURFACE.DEFAULT]">
        {{ props.heading }}
      </h2>
    </div>

    <TideButtonIcon
      :class="['tide-alert-close', CSS.AXIS2.CENTER, CSS.FONT.COLOR.SURFACE.DEFAULT]"
      :icon="ICON.CLOSE"
      :priority="PRIORITY.QUATERNARY"
      aria-label="Close alert"
    />

    <div :class="['tide-alert-body', CSS.FONT.WEIGHT.FIVE_HUNDRED, CSS.FONT.COLOR.SURFACE.VARIANT]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .tide-alert {
    grid-template-areas:
      'icon heading close'
      '. body .';
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 0.5rem;
    max-width: 40rem;
  }

  .tide-alert-icon {
    grid-area: icon;
  }

  .tide-alert-heading {
    grid-area: heading;
  }

  .tide-alert-close {
    grid-area: close;
  }

  .tide-alert-body {
    grid-area: body;
  }
</style>
