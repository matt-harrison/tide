const CSS = {
  ALIGN: {
    X: {
      CENTER: 'tide-text-center',
      LEFT: 'tide-text-left',
      RIGHT: 'tide-text-right',
    },
    Y: {
      MIDDLE: 'tide-align-middle',
    },
  },
  BORDER: {
    COLOR: {
      BLACK: 'tide-border-black',
      BLUE: 'tide-border-blue',
      BLUE_DARK: 'tide-border-blue-dark',
      BLUE_LIGHT: 'tide-border-blue-light',
      GRAY: 'tide-border-gray',
      GRAY_DARK: 'tide-border-gray-dark',
      GRAY_LIGHT: 'tide-border-gray-light',
      GREEN: 'tide-border-green',
      RED: 'tide-border-red',
      WHITE: 'tide-border-white',
    },
    SIDE: {
      BOTTOM: {
        ONE: 'tide-border-bottom-1',
        TWO: 'tide-border-bottom-2',
      },
      FULL: {
        ONE: 'tide-border-1',
        TWO: 'tide-border-2',
      },
      LEFT: {
        ONE: 'tide-border-left-1',
        TWO: 'tide-border-left-2',
      },
      RIGHT: {
        ONE: 'tide-border-right-1',
        TWO: 'tide-border-right-2',
      },
      TOP: {
        ONE: 'tide-border-top-1',
        TWO: 'tide-border-top-2',
      },
    },
  },
  BOX_SIZING: {
    BORDER_BOX: 'tide-box-border',
    CONTENT_BOX: 'tide-box-content',
  },
  BREAK_WORD: {
    ON: 'tide-break-word',
  },
  CURSOR: {
    NOT_ALLOWED: 'tide-cursor-not-allowed',
    POINTER: 'tide-cursor-pointer',
  },
  DIMENSION: {
    HEIGHT: {
      FULL: 'tide-height-full',
      HALF: 'tide-height-1/2',
      QUARTER: 'tide-height-1/4',
      THIRD: 'tide-height-1/3',
      ZERO: 'tide-height-0',
    },
    WIDTH: {
      FULL: 'tide-width-full',
      HALF: 'tide-width-1/2',
      MAX_FULL: 'tide-max-width-full',
      QUARTER: 'tide-width-1/4',
      THIRD: 'tide-width-1/3',
      ZERO: 'tide-width-0',
    },
  },
  DISPLAY: {
    BLOCK: 'tide-display-block',
    CONTENTS: 'tide-contents',
    FLEX: 'tide-display-flex',
    GRID: 'tide-display-grid',
    HIDDEN: 'tide-display-hidden',
    INITIAL: 'initial',
    INLINE: 'tide-display-inline',
    INLINE_BLOCK: 'tide-display-inline-block',
    INLINE_FLEX: 'tide-display-inline-flex',
  },
  FLEXBOX: {
    AXIS1: {
      AROUND: 'tide-axis1-around',
      BETWEEN: 'tide-axis1-between',
      CENTER: 'tide-axis1-center',
      END: 'tide-axis1-end',
      START: 'tide-axis1-start',
    },
    AXIS2: {
      AROUND: 'tide-axis2-around',
      CENTER: 'tide-axis2-center',
      END: 'tide-axis2-end',
      START: 'tide-axis2-start',
    },
    COLUMN: 'tide-flex-column',
    COLUMN_REVERSE: 'tide-flex-column-reverse',
    GAP: {
      FOUR: 'tide-gap-4',
      HALF: 'tide-gap-1/2',
      ONE: 'tide-gap-1',
      QUARTER: 'tide-gap-1/4',
      TWO: 'tide-gap-2',
    },
    GROW: {
      OFF: 'tide-grow-none',
      ON: 'tide-grow',
    },
    ROW: 'tide-flex-row',
    ROW_REVERSE: 'tide-row-reverse',
    SHRINK: {
      OFF: 'tide-shrink-none',
      ON: 'tide-shrink',
    },
    WRAP: 'tide-flex-wrap',
  },
  FONT_SIZE: {
    FONT_12: 'tide-font-12',
    FONT_14: 'tide-font-14',
    FONT_16: 'tide-font-16',
    FONT_20: 'tide-font-20',
    FONT_24: 'tide-font-24',
    FONT_32: 'tide-font-32',
  },
  FONT_WEIGHT: {
    FONT_400: 'tide-font-400',
    FONT_500: 'tide-font-500',
    FONT_600: 'tide-font-600',
    FONT_700: 'tide-font-700',
  },
  LIST: {
    BULLETS: {
      OFF: 'tide-list-none',
    },
  },
  MARGIN: {
    BOTTOM: {
      FOUR: 'tide-margin-bottom-4',
      HALF: 'tide-margin-bottom-1/2',
      ONE: 'tide-margin-bottom-1',
      QUARTER: 'tide-margin-bottom-1/4',
      TWO: 'tide-margin-bottom-2',
    },
    LEFT: {
      AUTO: 'tide-margin-left-auto',
      FOUR: 'tide-margin-left-4',
      HALF: 'tide-margin-left-1/2',
      ONE: 'tide-margin-left-1',
      QUARTER: 'tide-margin-left-1/4',
      TWO: 'tide-margin-left-2',
    },
    RIGHT: {
      AUTO: 'tide-margin-right-auto',
      FOUR: 'tide-margin-right-4',
      HALF: 'tide-margin-right-1/2',
      ONE: 'tide-margin-right-1',
      QUARTER: 'tide-margin-right-1/4',
      TWO: 'tide-margin-right-2',
    },
    TOP: {
      FOUR: 'tide-margin-top-4',
      HALF: 'tide-margin-top-1/2',
      ONE: 'tide-margin-top-1',
      QUARTER: 'tide-margin-top-1/4',
      TWO: 'tide-margin-top-2',
    },
    X: {
      AUTO: 'tide-margin-x-auto',
      FOUR: 'tide-margin-x-4',
      HALF: 'tide-margin-x-1/2',
      ONE: 'tide-margin-x-1',
      QUARTER: 'tide-margin-x-1/4',
      TWO: 'tide-margin-x-2',
    },
    Y: {
      FOUR: 'tide-margin-y-4',
      HALF: 'tide-margin-y-1/2',
      ONE: 'tide-margin-y-1',
      QUARTER: 'tide-margin-y-1/4',
      TWO: 'tide-margin-y-2',
    },
  },
  OBJECT: {
    CENTER: 'tide-object-center',
    CONTAIN: 'tide-object-contain',
    COVER: 'tide-object-cover',
    SCALE_DOWN: 'tide-object-scale-down',
  },
  OVERFLOW: {
    X: {
      AUTO: 'tide-x-auto',
      HIDDEN: 'tide-x-hidden',
      SCROLL: 'tide-x-scroll',
    },
    XY: {
      AUTO: 'tide-xy-auto',
      HIDDEN: 'tide-xy-hidden',
    },
    Y: {
      AUTO: 'tide-y-auto',
      HIDDEN: 'tide-y-hidden',
    },
  },
  PADDING: {
    BOTTOM: {
      FOUR: 'tide-padding-bottom-4',
      HALF: 'tide-padding-bottom-1/2',
      ONE: 'tide-padding-bottom-1',
      QUARTER: 'tide-padding-bottom-1/4',
      TWO: 'tide-padding-bottom-2',
    },
    LEFT: {
      FOUR: 'tide-padding-left-4',
      HALF: 'tide-padding-left-1/2',
      ONE: 'tide-padding-left-1',
      QUARTER: 'tide-padding-left-1/4',
      TWO: 'tide-padding-left-2',
    },
    RIGHT: {
      FOUR: 'tide-padding-right-4',
      HALF: 'tide-padding-right-1/2',
      ONE: 'tide-padding-right-1',
      QUARTER: 'tide-padding-right-1/4',
      TWO: 'tide-padding-right-2',
    },
    TOP: {
      FOUR: 'tide-padding-top-4',
      HALF: 'tide-padding-top-1/2',
      ONE: 'tide-padding-top-1',
      QUARTER: 'tide-padding-top-1/4',
      TWO: 'tide-padding-top-2',
    },
    X: {
      FOUR: 'tide-padding-x-4',
      HALF: 'tide-padding-x-1/2',
      ONE: 'tide-padding-x-1',
      QUARTER: 'tide-padding-x-1/4',
      TWO: 'tide-padding-x-2',
    },
    Y: {
      FOUR: 'tide-padding-y-4',
      HALF: 'tide-padding-y-1/2',
      ONE: 'tide-padding-y-1',
      QUARTER: 'tide-padding-y-1/4',
      TWO: 'tide-padding-y-2',
    },
  },
  POINTER_EVENTS: {
    OFF: 'tide-pointer-events-none',
    ON: 'tide-pointer-events',
  },
  POSITION: {
    ABSOLUTE: 'tide-position-absolute',
    FIXED: 'tide-position-fixed',
    RELATIVE: 'tide-position-relative',
    STICKY: 'tide-sticky',
  },
  POSITIONING: {
    BOTTOM_0: 'tide-bottom-0',
    LEFT_0: 'tide-left-0',
    RIGHT_0: 'tide-right-0',
    TOP_0: 'tide-top-0',
  },
  RADIUS: {
    FULL: 'tide-radius-full',
    HALF: 'tide-radius-1/2',
    ONE: 'tide-radius-1',
    QUARTER: 'tide-radius-1/4',
  },
  SCROLLBAR: {
    OFF: 'tide-scrollbar-none',
  },
  SHADOW: {
    BOTTOM: 'tide-shadow-bottom',
    TOP: 'tide-shadow-top',
  },
  SNAP: {
    ALIGN: {
      START: 'tide-snap-start',
    },
    ON: 'tide-snap',
  },
  TEXT_TRANSFORM: {
    LOWER: 'tide-text-transform-lower',
    NONE: 'tide-text-transform-none',
    UPPER: 'tide-text-transform-upper',
  },
  UNDERLINE: {
    HOVER: 'tide-underline-hover',
    OFF: 'tide-underline-none',
    ON: 'tide-underline',
  },
  VISIBILITY: {
    OFF: 'tide-visible-none',
    ON: 'tide-visible',
  },
  WHITESPACE: {
    NOWRAP: 'tide-whitespace-nowrap',
  },
};

export type CssUtility = (typeof CSS)[keyof typeof CSS];
