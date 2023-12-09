function Time() {
  const date = new Date();
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );
  const hours = date.getHours();
  const minute = date.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";

  return (
    <div className="time">
      <div className="cal-alert">
        <span className="month">{dayName}</span>
        <span className="month-number">{date.getDate()}</span>
      </div>
      <span className="time-alert">{`${
        hours % 12 || 12
      }:${minute} ${meridiem}`}</span>
    </div>
  );
}

export default Time;
