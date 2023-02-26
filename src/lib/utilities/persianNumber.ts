export const getPersianNumber = (
  value: number,
  options?: Intl.NumberFormatOptions
) => new Intl.NumberFormat("fa", options).format(value);
