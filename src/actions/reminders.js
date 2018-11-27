export const addReminder = ({ reminders = [] } = {}) => ({
  type: "ADD_REMINDER",
  reminders: {
    reminders
  }
});
export const removeReminder = ({ id } = {}) => ({
  type: "REMOVE_REMINDER",
  id: {
    id
  }
});
