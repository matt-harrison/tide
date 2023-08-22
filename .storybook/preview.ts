import type { Preview } from "@storybook/vue3";

import { realm } from '../src/config/main.config';

import '../src/assets/css/main.css';

import(`../src/assets/css/realm/${realm.id}.css`);

const preview: Preview = {
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
          'Foundations',
          [
            'Static Utilities', ['Flex Gap', 'Margin', 'Border', 'Padding', 'Background', 'Typography',
            'Shadow', ['Box Shadow', 'Text Shadow']
          ],
            'Dynamic Utilities', ['Background Color', 'Border Color', 'Font Color'],
          ],
          'Basic Components', ['BasicAccordionItem', 'BasicBreadCrumbs', 'BasicButton', 'BasicButtonIcon', 'BasicButtonPagination', 'BasicIcon'],
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
