import uuid from "uuid";

export const addReminder = ({ reminders = [] } = {}) => {
  console.log("action-ADD_REMINDER", reminders);
  return {
    id: uuid(),
    type: "ADD_REMINDER",
    reminders: reminders
  };
};

export const removeReminder = ({ id } = {}) => ({
  type: "REMOVE_REMINDER",
  id: {
    id
  }
});
