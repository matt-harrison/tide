# TIDE Design System

TIDE (**T**rader **I**nteractive **D**esign and **E**ngineering) is a design system created and maintained by the TIDE Task Force of Trader Interactive's All-in Marketplace group, encompassing members of the Design, Development, and Product departments. It was initially developed for use in the `marketplace` repository, but can potentially be incorporated into further Trader projects, subject to the following technical restrictions:

1. CSS utilities can be leveraged by any Node-compiled project.
2. Types can be leveraged by any TypeScript project.
3. Basic components can be leveraged by any Vue 3 project.

## Local Setup

1. Install dependencies:

   `npm install`

2. Run demo:

   `npm storybook`

## Prod Integration
1. Install dependency from Node Package Manager Registry:

   `npm install --save tide-design-system`

2. Declare module in `/index.d.ts`:

   `declare module 'tide-design-system';`

3. Import CSS utilities:

   `import 'tide-design-system/css';`

4. Import realm-specific CSS vars (where applicable):

   `import 'tide-design-system/css/realm/aero';`

   `import 'tide-design-system/css/realm/atv';`

   `import 'tide-design-system/css/realm/boatmart';`

   `import 'tide-design-system/css/realm/cycle';`

   `import 'tide-design-system/css/realm/equip';`

   `import 'tide-design-system/css/realm/pwc';`

   `import 'tide-design-system/css/realm/snow';`

   `import 'tide-design-system/css/realm/truck';`

5. Leverage TypeScript types:

   `import { CSS } from 'tide-design-system';`

6. Leverage Vue 3 component(s):

   `import { TideButton } from 'tide-design-system';`

7. Leverage CSS utilities:
   1. Via JS constants (preferred):

        `<div :class="[CSS.DISPLAY.ABSOLUTE]" />`

   2. Via CSS directly (when markup is outside a JS framework):

        `<div class="tide-position-absolute" />`

## Dev Integration
Run a local instance of `tide-design-system` to be consumed by another local project to preview changes prior to publishing changes to the NPM Registrty.

1. TIDE directory
   1. Clone repository:

        `git clone git@github.com:traderinteractive/marketplace-storybook.git`

   2. Install packages:

        `cd marketplace-storybook`

        `npm install`
   3. Generate distribution files:

        `npm build`

   4. From TIDE directory, create local package alias:

       `npm link`

2. Consumer directory

   Leverage local package alias:

   `npm link tide-design-system`

## Publication (TIDE Task Force devs only)
1. Test via local integration (see above)
2. Increment version

   \# TIDE design standard version

   #.# Non-backward compatible release

   #.#.# Backward compatible feature

   #.#.#.# Bugfix

3. Publish (RESTRICTED)

    `npm publish`

## Scripts
-  `npm run build`: Generate package.
-  `npm run build-storybook`: Generate Storybook UI.
-  `npm run coverage`: Display unit test statistics.
-  `npm run lint`: Show ESLint issues.
-  `npm run lint:fix`: Autofix ESLint issues where available.
-  `npm run preview`: Serve Storybook UI in production mode.
-  `npm run storybook`: Serve Storybook UI in development mode.
-  `npm run test`: Run unit test suite.
-  `npm run type-check`: Detect TypeScript errors.

## Storybook UI

1. Sidebar: Serves as table of contents
2. Toolbar: Offers project-level controls
3. Canvas: Contains interactive demo
4. Code snippet: Demonstrates usage
5. Controls: Implements args in demo and code snippet
6. Stories: Demonstrates all major features of a given component
