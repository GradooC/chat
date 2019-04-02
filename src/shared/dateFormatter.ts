const getFormatedDate = (pastDateString: string): string => {
  const currentDate = new Date();
  const pastDate = new Date(pastDateString);

  const dateFormatters = [
    {
      diff: (currentDate: Date, pastDate: Date) =>
        currentDate.getFullYear() - pastDate.getFullYear() > 0,
      options: { year: "numeric" }
    },
    {
      diff: (currentDate: Date, pastDate: Date) =>
        currentDate.getMonth() - pastDate.getMonth() > 0,
      options: {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        month: "long",
        day: "numeric"
      }
    },
    {
      diff: (currentDate: Date, pastDate: Date) =>
        currentDate.getDay() - pastDate.getDay() > 0,
      options: {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        month: "long",
        day: "numeric"
      }
    }
  ];

  const todayFormatterOptions = { hour12: false, hour: "numeric", minute: "numeric" };
  const formatter = dateFormatters.find(({ diff }) => diff(currentDate, pastDate));
  const options = formatter ? formatter.options : todayFormatterOptions;

  return pastDate.toLocaleString("en", options)
};

export default getFormatedDate;