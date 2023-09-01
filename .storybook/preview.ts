import type { Preview } from "@storybook/vue3";

import '../src/assets/css/main.css';

const preview: Preview = {
  decorators: [
    (story, context) => {
      import(`../src/assets/css/realm/${context.globals.realm.toLowerCase()}.css`);

      return {
        template: context.globals.theme === 'Dark'
          ? `<div class="theme-${context.globals.theme.toLowerCase()} bg-surface p-1"><story /></div>`
          : '<story />',
      };
    },
  ],
  globalTypes: {
    realm: {
      description: 'Determines Realm context of dynamic CSS utilities',
      defaultValue: 'rv',
      toolbar: {
        title: 'Realm',
        items: [
          'Aero',
          'ATV',
          'Boatline',
          'Cycle',
          'Equip',
          'PWC',
          'RV',
          'Snow',
          'Truck',
        ],
      },
    },
    theme: {
      description: 'Determines Theme context of dynamic CSS utilities',
      defaultValue: 'Light',
      toolbar: {
        title: 'Theme',
        items: ['Light', 'Dark'],
      },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'Surface Default',
          value: 'var(--ti-surface-background-default)',
        },
        {
          name: 'Surface Light',
          value: 'var(--ti-surface-background-light)',
        },
        {
          name: 'Surface Dark',
          value: 'var(--ti-surface-background-dark)',
        },
      ],
    },
    docs: {
      canvas: {
        // sourceState: 'shown',
      },
      controls: {
        sort: 'requiredFirst',
      },
      source: {
        type: 'dynamic',
      },
    },
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
