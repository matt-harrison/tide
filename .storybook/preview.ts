import type { Preview } from '@storybook/vue3';

import '../src/assets/css/main.css';
import BasicCarousel from '../src/stories/BasicCarousel.stories';
import DemoCssUtilities from '../src/stories/DemoCssUtilities.stories';
import DemoCssUtilitiesByTextInput from '../src/stories/DemoCssUtilitiesByTextInput.stories';
import FoundationsMargin from '../src/stories/FoundationsMargin.stories';

const preview: Preview = {
  decorators: [
    (story, context) => {
      import(`../src/assets/css/realm/${context.globals.realm}.css`);

      const decoratorOptOuts = [
        BasicCarousel.title,
        DemoCssUtilities.title,
        DemoCssUtilitiesByTextInput.title,
        FoundationsMargin.title,
      ];
      const decoratorCss = decoratorOptOuts.includes(context.title) ? 'pb-2' : 'p-2';

      return {
        components: { story },
        template: `<div class="${context.globals.theme} ${decoratorCss} ${context.globals.surface}"><story /></div>`
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
            title: 'Realm: Aero',
            value: 'aero',
          },
          {
            title: 'Realm: ATV',
            value: 'atv',
          },
          {
            title: 'Realm: Boatline',
            value: 'boatline',
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
    surface: {
      description: 'Determines Background context of dynamic CSS utilities',
      defaultValue: 'bg-surface',
      toolbar: {
        dynamicTitle: true,
        items: [
          {
            title: 'Surface: Default',
            value: 'bg-surface',
          },
          {
            title: 'Surface: Light',
            value: 'bg-surface-light',
          },
          {
            title: 'Surface: Dark',
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
            title: 'Theme: Light',
            value: 'theme-light',
          },
          {
            title: 'Theme: Dark',
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
          'Basic Components',
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
