export const TEXT_INPUT_TYPE = {
  DATE: 'date',
  DATETIME_LOCAL: 'datetime-local',
  EMAIL: 'email',
  MONTH: 'month',
  NUMBER: 'number',
  PASSWORD: 'password',
  SEARCH: 'search',
  TEL: 'tel',
  TEXT: 'text',
  TIME: 'time',
  URL: 'url',
  WEEK: 'week',
} as const;

export type TextInputType = (typeof TEXT_INPUT_TYPE)[keyof typeof TEXT_INPUT_TYPE];
