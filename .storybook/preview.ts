import { useArgs } from '@storybook/preview-api';

import type { Preview } from '@storybook/vue3';

import '@/assets/css/main.css';
import '@/assets/css/reset.css';
import '@/assets/css/storybook.css';

import TideCarousel from '../src/stories/TideCarousel.stories';
import DemoCssUtilities from '../src/stories/DemoCssUtilities.stories';
import DemoCssUtilitiesByTextInput from '../src/stories/DemoCssUtilitiesByTextInput.stories';
import FoundationsMargin from '../src/stories/FoundationsMargin.stories';

const cssRoot = import.meta.env.PROD ? '/public' : '/src/assets/css/realm';

const replaceRealmStyles = (realm: string) => {
    document.getElementById('realmStyles')?.remove();

    const href = `${cssRoot}/${realm}.css`;
    const realmStyles = document.createElement('link');

    realmStyles.href = href;
    realmStyles.id = 'realmStyles';
    realmStyles.rel = 'stylesheet';
    document.body.append(realmStyles);
};

const preview: Preview = {
  decorators: [
    (story, context) => {
      const decoratorOptOuts = [
        TideCarousel.title,
        DemoCssUtilities.title,
        DemoCssUtilitiesByTextInput.title,
        FoundationsMargin.title,
      ];

      const decoratorCss = decoratorOptOuts.includes(context.title) ? '' : 'tide-padding-top-2 tide-padding-x-2';

      replaceRealmStyles(context.globals.realm);

      return {
        components: { story },
        template: `<div class="${decoratorCss} tide-padding-bottom-4 ${context.globals.surfaceBg} ${context.globals.surfaceFg}"><story /></div>`
      };
    },
    (story, context) => {
      const [args, updateArgs] = useArgs();

      return story({ ...context, updateArgs });
    },
  ],
  globalTypes: {
    realm: {
      description: 'Determines Realm context of dynamic CSS utilities',
      defaultValue: 'rv',
      toolbar: {
        dynamicTitle: true,
        items: [
          {
            title: 'Realm: Aero',
            value: 'aero',
          },
          {
            title: 'Realm: ATV',
            value: 'atv',
          },
          {
            title: 'Realm: Boatmart',
            value: 'boatmart',
          },
          {
            title: 'Realm: Cycle',
            value: 'cycle',
          },
          {
            title: 'Realm: Equipment',
            value: 'equip',
          },
          {
            title: 'Realm: PWC',
            value: 'pwc',
          },
          {
            title: 'Realm: RV',
            value: 'rv',
          },
          {
            title: 'Realm: Snow',
            value: 'snow',
          },
          {
            title: 'Realm: Truck',
            value: 'truck',
          },
        ],
        title: 'Realm',
      },
    },
    surfaceBg: {
      description: 'Determines Background context of dynamic CSS utilities',
      defaultValue: 'tide-bg-surface',
      toolbar: {
        dynamicTitle: true,
        items: [
          {
            title: 'Surface: Default',
            value: 'tide-bg-surface',
          },
          {
            title: 'Surface: Variant',
            value: 'tide-bg-surface-variant',
          },
          {
            title: 'Surface: Brand',
            value: 'tide-bg-surface-brand',
          },
          {
            title: 'Surface: Accent',
            value: 'tide-bg-surface-accent',
          },
          {
            title: 'Surface: Accent Variant',
            value: 'tide-bg-surface-accent-variant',
          },
          {
            title: 'Surface: Gradient',
            value: 'tide-bg-surface-gradient',
          },
          {
            title: 'Surface: Floating',
            value: 'tide-bg-surface-floating',
          },
        ],
        title: 'Surface',
      },
    },
    surfaceFg: {
      description: 'Determines Foreground context of dynamic CSS utilities',
      defaultValue: 'tide-on-surface',
      toolbar: {
        dynamicTitle: true,
        items: [
          {
            title: 'On Surface: Default',
            value: 'tide-font-on-surface',
          },
          {
            title: 'On Surface: Variant',
            value: 'tide-font-on-surface-variant',
          },
          {
            title: 'On Surface: Brand',
            value: 'tide-font-on-surface-brand',
          },
          {
            title: 'On Surface: Inverse',
            value: 'tide-font-on-surface-inverse',
          },
          {
            title: 'On Surface: Variant Inverse',
            value: 'tide-font-on-surface-variant-inverse',
          },
        ],
        title: 'On Surface',
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    docs: {
      canvas: {
        // sourceState:  'shown',
        withToolbar: false,
      },
      controls: { sort: 'requiredFirst' },
      source: { type: 'dynamic' },
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: [
          'Welcome',
          'Foundations',
          'Tide Components',
          'Proof of Concept', [
            'CSS Utilities Demo',
            'CSS Utilities By Text Input',
          ],
        ],
      },
    },
    toolbar: {
      grid: { hidden: true },
    },
    viewport: {
      viewports: {
        extraSmallMin: {
          name: 'Extra Small (iPhone 12/13 Mini)',
          styles: {
            width: '375px',
            height: '812px',
          },
        },
        extraSmallMax: {
          name: 'Extra Small Max',
          styles: {
            width: '767px',
            height: '100%',
          },
        },
        smallMin: {
          name: 'Small Min',
          styles: {
            width: '768px',
            height: '100%',
          },
        },
        smallMax: {
          name: 'Small Max',
          styles: {
            width: '991px',
            height: '100%',
          },
        },
        mediumMin: {
          name: 'Medium Min',
          styles: {
            width: '992px',
            height: '100%',
          },
        },
        mediumMax: {
          name: 'Medium Max',
          styles: {
            width: '1231px',
            height: '100%',
          },
        },
        largeMin: {
          name: 'Large Min',
          styles: {
            width: '1232px',
            height: '100%',
          },
        },
      },
    },
  },
};

export default preview;
