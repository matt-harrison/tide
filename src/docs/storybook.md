# TIDE Storybook

Storybook is a frontend workshop for building, testing, and documenting UI components and styles in isolation.

## Benefits

The TIDE Storybook was implemented to facilitate collaboration between 3 primary departments within the Trader Interactive development group:
- **Product Managers** can reference our components library when writing requirements for new pages and features.
- **Designers** can interact with our components in real browser conditions independent from any specific context in our websites.
- **Engineers** can leverage our components without having to become reacquinted with formatting standards, styling structures, or complex prop implementations.

## TODO
- based in stories
- args -> props, etc.

## Public

The TIDE Storybook UI is currently hosted from Netlify, a free, third-party platform connected to the Trader developer's personal GitHub fork. This is a temporary measure, to be replaced by a permanent solution that integrates the private server deployment process into the `marketplace-storybook` repository of the `traderinteractive` GitHub account for hosting to users within the Trader VPN.

https://tide-design-system.netlify.app

## Local Setup

1. Install dependencies:

   `npm install`

2. Run demo:

   `npm run storybook`

## Storybook UI

1. **Sidebar** serves as table of contents along the left edge of the screen
2. **Toolbar** offers project-level controls across the top of the screen
3. **Canvas** contains an interactive demo
4. **Code snippet** displays live-updated markup implementation available to copy
5. **Controls** determine the options passed into demo and code snippet
6. **Stories** demonstrate all major features of a given structure
