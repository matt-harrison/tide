import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: [
    '../src/stories/Welcome.mdx',
    // '../src/stories/*.stories.ts',

    '../src/stories/Demo*.stories.ts',
    '../src/stories/Foundations*.stories.ts',

    '../src/stories/BasicAccordionItem.stories.ts',
    '../src/stories/BasicAlert.stories.ts',
    // '../src/stories/BasicBadge.stories.ts',
    '../src/stories/BasicBreadCrumbs.stories.ts',
    '../src/stories/BasicButton.stories.ts',
    '../src/stories/BasicButtonIcon.stories.ts',
    '../src/stories/BasicButtonPagination.stories.ts',
    '../src/stories/BasicCard.stories.ts',
    '../src/stories/BasicCarousel.stories.ts',
    // '../src/stories/BasicCheckbox.stories.ts',
    '../src/stories/BasicChipAction.stories.ts',
    '../src/stories/BasicChipFilter.stories.ts',
    '../src/stories/BasicChipInput.stories.ts',
    '../src/stories/BasicColumns.stories.ts',
    // '../src/stories/BasicContainer.stories.ts',
    '../src/stories/BasicDivider.stories.ts',
    '../src/stories/BasicIcon.stories.ts',
    // '../src/stories/BasicImage.stories.ts',
    '../src/stories/BasicLink.stories.ts',
    // '../src/stories/BasicModal.stories.ts',
    '../src/stories/BasicPagination.stories.ts',
    // '../src/stories/BasicInputRadio.stories.ts',
    // '../src/stories/BasicInputSelect.stories.ts',
    // '../src/stories/BasicInputText.stories.ts',
    // '../src/stories/BasicInputTextarea.stories.ts',
    // '../src/stories/BasicNotificationIndicator.stories.ts',
    // '../src/stories/BasicSearchInput.stories.ts',
    // '../src/stories/BasicSeoLinks.stories.ts',
    // '../src/stories/BasicSuggestionPill.stories.ts',
    '../src/stories/BasicTabs.stories.ts',
    '../src/stories/BasicToggle.stories.ts',
  ],
};
export default config;
