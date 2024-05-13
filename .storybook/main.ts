import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
  ],
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

    '../src/stories/TideAccordionItem.stories.ts',
    '../src/stories/TideAlert.stories.ts',
    '../src/stories/TideBadge.stories.ts',
    '../src/stories/TideBadgeCounter.stories.ts',
    '../src/stories/TideBadgeMisc.stories.ts',
    '../src/stories/TideBadgePremium.stories.ts',
    '../src/stories/TideBadgeTrustedPartner.stories.ts',
    '../src/stories/TideBreadCrumbs.stories.ts',
    '../src/stories/TideButton.stories.ts',
    '../src/stories/TideButtonIcon.stories.ts',
    '../src/stories/TideButtonPagination.stories.ts',
    '../src/stories/TideCard.stories.ts',
    '../src/stories/TideCarousel.stories.ts',
    // '../src/stories/TideCheckbox.stories.ts',
    '../src/stories/TideChipAction.stories.ts',
    '../src/stories/TideChipFilter.stories.ts',
    '../src/stories/TideChipInput.stories.ts',
    '../src/stories/TideColumns.stories.ts',
    '../src/stories/TideDivider.stories.ts',
    '../src/stories/TideIcon.stories.ts',
    '../src/stories/TideIndicator.stories.ts',
    // '../src/stories/TideImage.stories.ts',
    '../src/stories/TideInputRadio.stories.ts',
    '../src/stories/TideInputSelect.stories.ts',
    '../src/stories/TideInputText.stories.ts',
    '../src/stories/TideInputTextarea.stories.ts',
    '../src/stories/TideLink.stories.ts',
    '../src/stories/TideModal.stories.ts',
    '../src/stories/TidePagination.stories.ts',
    // '../src/stories/TideSeoLinks.stories.ts',
    '../src/stories/TideTabs.stories.ts',
    '../src/stories/TideToggle.stories.ts',
  ],
};

export default config;
