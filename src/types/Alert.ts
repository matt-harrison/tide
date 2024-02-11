export const ALERT = {
  ERROR: 'error',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const;

export type Alert = (typeof ALERT)[keyof typeof ALERT];
