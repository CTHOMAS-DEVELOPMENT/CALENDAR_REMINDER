const calendarDataDefaultState = [];

export default (state = calendarDataDefaultState, action) => {
  switch (action.type) {
    case "ADD_REMINDER":
      console.log("ADD_REMINDER-reducer", action.reminders);
      console.log("ADD_REMINDER id=", action.id);
      return action.reminders;
    case "REMOVE_REMINDER":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
