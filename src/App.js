import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addReminder } from "./actions/reminders";
import Days from "./components/days";
import calendar from "./fixtures/calendarData";
import "./App.css";

const store = configureStore();

class App extends React.Component {
  state = {
    day: 0,
    days: 0,
    daystart: 0,
    year: 0,
    monthName: "",
    calendarStatus: 0, //Set to 0 for the current month
    reminders: []
  };

  componentDidMount() {
    const calendar = document.querySelector(".calendar");
    const arrowLeft = calendar.querySelector(".arrowLeft");
    const arrowRight = calendar.querySelector(".arrowRight");
    const keys = calendar.querySelector(".calendar__keys");

    arrowLeft.addEventListener("click", e => {
      this.setState({ calendarStatus: this.state.calendarStatus - 1 });
    });
    arrowRight.addEventListener("click", e => {
      this.setState({ calendarStatus: this.state.calendarStatus + 1 });
    });
    keys.addEventListener("click", e => {
      const key = e.target;
      const action = key.dataset.action;
      console.log(key, key);
      if (action === "clicked") console.log("key.textContent", key.textContent);
    });
  }
  onReminderChange = (arr, e) => {
    this.setState({ reminders: arr });
    //store.dispatch(addReminder({ reminders: arr }));
  };
  render() {
    const {
      day,
      daysInThisMonth,
      daysInLastMonth,
      firstWeekDay,
      monthName,
      calendarStatus,
      year,
      reminders
    } = calendar(this.state);
    return (
      <Provider store={store} className="App">
        <Days
          days={daysInThisMonth}
          daysInLast={daysInLastMonth}
          daystart={firstWeekDay}
          day={day}
          monthName={monthName}
          year={year}
          calendarStatus={calendarStatus}
          reminders={reminders}
          onReminderChange={this.onReminderChange}
        />
      </Provider>
    );
  }
}

export default App;
