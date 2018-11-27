const calendarDataDefaultState = [];

export default (state = calendarDataDefaultState, action) => {
  switch (action.type) {
    case "ADD_REMINDER":
      return [...state, action.reminder];
    case "REMOVE_REMINDER":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
}

