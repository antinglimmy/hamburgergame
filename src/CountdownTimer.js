import React from "react";

const CountDown = ({ seconds = 0 }) => {
  const [over, setOver] = React.useState(false);
  const [[s], setTime] = React.useState([seconds]);
  const [timerClass, setTimerClass] = React.useState("");

  const tick = () => {
    if (over) return;
    if (s === 0) {
      setOver(true);
      setTimerClass("");
    } else {
      setTime([s - 1]);
    }
    if (s < 7) {
      setTimerClass("timerWarning");
    }
  };

  const reset = () => {
    setTime([parseInt(seconds)]);
    setOver(false);
    setTimerClass("");
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p className={timerClass}>{`${s.toString().padStart(1, "0")}`}</p>
      <div>{over ? "Time's up, the customer has left!" : ""}</div>
      <button onClick={() => reset()}>Restart</button>
    </div>
  );
};

export default CountDown;
