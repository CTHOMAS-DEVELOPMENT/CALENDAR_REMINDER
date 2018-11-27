import months from "./data";
const calendar = state => {
  const date = new Date();
  let info = {};
  let day = date.getDate();
  let month = date.getMonth() + state.calendarStatus;
  let year = date.getFullYear();
  let lastMonth = new Date(year, month - 1 + state.calendarStatus, 1);
  let thisMonth = new Date(year, month + state.calendarStatus, 1);
  let nextMonth = new Date(year, month + 1 + state.calendarStatus, 1);
  const daysInTheMonth = (month, monthBefore) => {
    return Math.round(
      (month.getTime() - monthBefore.getTime()) / (1000 * 60 * 60 * 24)
    );
  };
  // Initialized values to display calendar.
  info.day = day;
  info.firstWeekDay = thisMonth.getDay();
  info.daysInThisMonth = daysInTheMonth(nextMonth, thisMonth);
  info.daysInLastMonth = daysInTheMonth(thisMonth, lastMonth);
  info.year = year;
  info.monthName = months[month];
  info.reminders = new Array(info.daysInThisMonth);

  return info;
};

export default calendar;
