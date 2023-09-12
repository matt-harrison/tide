import type { Preview } from '@storybook/vue3';

/*
import { setup, Preview } from '@storybook/vue3';
import { createPinia } from 'pinia';

setup((app) => {
  app.use(createPinia());
});
*/

import '../src/assets/css/main.css';

const preview: Preview = {
  decorators: [
    (story, context) => {
      import(`../src/assets/css/realm/${context.globals.realm}.css`);

      return {
        components: { story },
        template: `<div class="${context.globals.theme} p-2 w-full h-full ${context.globals.surface} font-surface"><story /></div>`
      };
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
            title: 'Aero Realm',
            value: 'aero',
          },
          {
            title: 'ATV Realm',
            value: 'atv',
          },
          {
            title: 'Boatline Realm',
            value: 'boatline',
          },
          {
            title: 'Cycle Realm',
            value: 'cycle',
          },
          {
            title: 'Equipment Realm',
            value: 'equip',
          },
          {
            title: 'PWC Realm',
            value: 'pwc',
          },
          {
            title: 'RV Realm',
            value: 'rv',
          },
          {
            title: 'Snow Realm',
            value: 'snow',
          },
          {
            title: 'Truck Realm',
            value: 'truck',
          },
        ],
        title: 'Realm',
      },
    },
    surface: {
      description: 'Determines Background context of dynamic CSS utilities',
      defaultValue: 'bg-surface',
      toolbar: {
        dynamicTitle: true,
        items: [
          {
            title: 'Surface Default',
            value: 'bg-surface',
          },
          {
            title: 'Surface Light',
            value: 'bg-surface-light',
          },
          {
            title: 'Surface Dark',
            value: 'bg-surface-dark',
          },
        ],
        title: 'Surface',
      },
    },
    theme: {
      description: 'Determines Theme context of dynamic CSS utilities',
      defaultValue: 'theme-light',
      toolbar: {
        dynamicTitle: true,
        items: [
          {
            title: 'Light Theme',
            value: 'theme-light',
          },
          {
            title: 'Dark Theme',
            value: 'theme-dark',
          },
        ],
        title: 'Theme',
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    docs: {
      canvas: {
        // sourceState: 'shown',
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
          [
            'Static Utilities', ['Flex', 'Margin', 'Border', 'Padding', 'Background', 'Typography',
            'Shadow', ['Box Shadow', 'Text Shadow']
          ],
            'Dynamic Utilities', ['Background Color', 'Border Color', 'Font Color'],
          ],
          'Basic Components', [
            'BasicAccordionItem',
            'BasicBreadCrumbs',
            'BasicButton',
            'BasicButtonIcon',
            'BasicButtonTextAsIcon',
            'BasicChipAction',
            'BasicChipFilter',
            'BasicChipInput',
            'BasicIcon',
            'BasicLinkWithIcon',
            'BasicTabs',
            'BasicToggle',
          ],
          'Proof of Concept', [
            'Template',
            'TemplateCssControlsByTextInput',
            'TemplateCssControlsByType',
          ],
        ],
      },
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
