import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addReminder } from "./actions/reminders";
import Days from "./components/days";
import calendarInfo from "./fixtures/calendarData";
import "./App.css";

const store = configureStore();


class App extends React.Component {
  state = {
    day: 0,
    days: 0,
    daystart: 0,
    year: 0,
    monthName: "",
    calendarStatus: 0, //Set to 0 for the current monthcalendarStatus
    reminders: []
  };
  componentWillMount() {
    this.setState(calendarInfo(this.state));
  }
  componentDidMount() {
    const calendar = document.querySelector(".calendar");
    const arrowLeft = calendar.querySelector(".arrowLeft");
    const arrowRight = calendar.querySelector(".arrowRight");
    const keys = calendar.querySelector(".calendar__keys");

    arrowLeft.addEventListener("click", e => {
      this.setState({ calendarStatus: this.state.calendarStatus - 1 });
      this.setState(calendarInfo(this.state));
    });
    arrowRight.addEventListener("click", e => {
      this.setState({ calendarStatus: this.state.calendarStatus + 1 });
      this.setState(calendarInfo(this.state));
    });
    keys.addEventListener("click", e => {
      const key = e.target;
      const action = key.dataset.action;
      console.log("key", key);
      //if (action === "clicked") console.log("key.textContent", key.textContent);
    });
  }
  onReminderChange = (arr, index, e) => {
    arr[index] = e.target.value;
    this.setState({ reminders: arr });
    //console.log("this.state", this.state);
    store.dispatch(addReminder({ reminders: arr }));
    console.log(store.getState());
  };
  render() {
    return (
      <Provider store={store} className="App">
        <Days
          days={this.state.daysInThisMonth}
          daysInLast={this.state.daysInLastMonth}
          daystart={this.state.firstWeekDay}
          day={this.state.day}
          monthName={this.state.monthName}
          year={this.state.year}
          calendarStatus={this.state.calendarStatus}
          reminders={this.state.reminders}
          onReminderChange={this.onReminderChange}
        />
      </Provider>
    );
  }
}

export default App;
