import { createStore } from "redux";
import reminders from "../reducers/calendarData";

export default () => {
  const store = createStore(() => {
    return reminders;
  });
  return store;
};
