# TIDE Prod Integration
1. Install dependency from Node Package Manager Registry:

   `npm install tide-design-system`

2. Use CSS utilities:
   1. Import global utilities:

      `import 'tide-design-system/css';`

   2. Import realm-specific utilities (where applicable):

      `import 'tide-design-system/css/realm/aero';`

      `import 'tide-design-system/css/realm/atv';`

      `import 'tide-design-system/css/realm/boatmart';`

      `import 'tide-design-system/css/realm/cycle';`

      `import 'tide-design-system/css/realm/equip';`

      `import 'tide-design-system/css/realm/pwc';`

      `import 'tide-design-system/css/realm/snow';`

      `import 'tide-design-system/css/realm/truck';`

   3. Import TypeScript constant:

      `import { CSS } from 'tide-design-system';`

   4. Leverage:

      `<div :class="[CSS.DISPLAY.ABSOLUTE]" />`

   5. Via CSS directly (only when markup is outside a JS framework):

         `<div class="tide-position-absolute" />`

3. Use TypeScript types:
   1. Import:

      `import type { Priority } from 'tide-design-system';`

   2. Leverage:

      ```
      type Sample = {
         ...
         priority: Priority;
      };
      ```

      ```
      const setPriority = (priority: Priority) => {...};
      ```

4. Leverage TypeScript constants:
   1. Import:

      `import { PRIORITY } from 'tide-design-system';`

   2. Leverage:

      `<div :priority="PRIORITY.QUATERNARY">Sample</div>`

5. Use Vue 3 component(s):
   1. Import:

      `import { TideButton } from 'tide-design-system';`

   2. Leverage:

      `<TideButton label="Sample" />`
