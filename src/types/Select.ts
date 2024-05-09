export type SelectOption = {
  label: string | number;
  value: any;
};

export type SelectOptGroup = {
  label: string;
  options?: SelectOption[];
  value?: any;
};
