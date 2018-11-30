import React from "react";
import { connect } from "react-redux";
import { days } from "../fixtures/data";
import "./../App.css";
const abbrDays = days;
const divStyle = {
  color: "white",
  backgroundColor: "orange",
  padding: "0px"
};
const divStyleNonMonthDays = {
  color: "grey"
};

//export default ConnectedClassName;
const Days = props => {
  //console.log("props", this.props);
  const {
    day,
    days,
    daysInLast,
    daystart,
    monthName,
    year,
    calendarStatus,
    reminders,
    onReminderChange
  } = props;
  const lastMonthDayCount = daysInLast - daystart + 1;
  const totalUsedCells = daystart + days;
  const finalCellCount = 7 - (totalUsedCells % 7);

  return (
    <div className="calendar">
      <div className="calendar__display">
        <button className="arrowLeft" data-action="arrowLeft">
          &lt;
        </button>
        {monthName} {year}
        <button className="arrowRight" data-action="arrowRight">
          &gt;
        </button>
      </div>

      <div className="calendar__keys">
        {Array.from(Array(7), (e, i) => {
          return (
            <button style={divStyle} key={i + 1}>
              {abbrDays[i]}
            </button>
          );
        })}
        {/*Note: Put in last days from previous month*/}
        {Array.from(Array(daystart), (e, i) => {
          return (
            <button key={i + 1} style={divStyleNonMonthDays}>
              {lastMonthDayCount + i}
            </button>
          );
        })}
        {/*Note: The days of the current month*/}
        {Array.from(Array(days), (e, i) => {
          return (
            <div key={i + daystart + 1} data-action="clicked">
              {day === i + 1 && calendarStatus === 0 ? (
                <b>{i + 1}</b>
              ) : (
                <span>{i + 1}</span>
              )}
              <br />
              <input
                type="text"
                placeholder="Input"
                defaultValue={reminders[i]}
                onChange={e => onReminderChange(reminders, i, e)}
              />
            </div>
          );
        })}
        {/*Note: Put in first days for the following month*/}
        {Array.from(Array(finalCellCount), (e, i) => {
          return (
            <button key={i + 1} style={divStyleNonMonthDays}>
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { reminders: state.reminders };
};
const ConnectedDays = connect(mapStateToProps)(Days);

export default ConnectedDays;
