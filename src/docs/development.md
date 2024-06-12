# TIDE Development

## Local Integration
Run a local instance of `tide-design-system` in parallel with a local consumer project to preview changes prior to publishing a revision to the NPM Registrty.

1. Clone repository:

    `git clone git@github.com:traderinteractive/marketplace-storybook.git`

2. Install packages:

    `cd marketplace-storybook`

    `npm install`

3. Generate distribution files:

    `npm build`

4. From TIDE directory, create local package alias:

    `npm link`

5. From consumer directory. leverage local package alias:

   `npm link tide-design-system`

## Scripts
-  `npm run build`: Generate package.
-  `npm run build-storybook`: Generate Storybook UI.
-  `npm run coverage`: Display unit test statistics.
-  `npm run lint`: Display ESLint issues.
-  `npm run lint:fix`: Autofix ESLint issues where available.
-  `npm run preview`: Serve Storybook UI in production mode.
-  `npm run storybook`: Serve Storybook UI in development mode.
-  `npm run test`: Run unit test suite.
-  `npm run type-check`: Detect TypeScript errors.

## Publication (TIDE Task Force devs only)
1. Test via local integration (see above)
2. Increment version

   \# Non-backward compatible release

   #.# Backward compatible feature

   #.#.# Backward compatible bugfix

3. Publish (RESTRICTED)

    `npm publish`
