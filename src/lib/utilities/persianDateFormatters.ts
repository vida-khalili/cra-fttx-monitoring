const PERSIAN_MONTHS = [
  undefined,
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const extractPersianDate = (date: string) => {
  if (!date.length) return;
  let [month, year] = date.split("-");
  month = PERSIAN_MONTHS[+month] as string;
  return [month, year];
};

export const persianDateTickFormatter = (value: any) => {
  const persianDate = extractPersianDate(value);
  if (!persianDate) return "";
  const [month, year] = persianDate;
  return !month ? year : `${month} ${year}`;
};

export const persianDateLabelFormatter = (label: string) => {
  const persianDate = extractPersianDate(label);
  if (!persianDate) return "";
  const [month, year] = persianDate;
  return !month ? `سال ${year}` : `${month} ${year}`;
};
