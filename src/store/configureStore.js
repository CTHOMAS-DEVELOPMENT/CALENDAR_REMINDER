import { createStore, combineReducers } from "redux";
import reminders from "../reducers/calendarData";

export default () => {
  return createStore(combineReducers({ reminders: reminders }));
};
