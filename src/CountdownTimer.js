import React from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

const CountDown = ({ seconds = 0, nextOrder }) => {
  const [over, setOver] = React.useState(false);
  const [[s], setTime] = React.useState([seconds]);
  const [timerClass, setTimerClass] = React.useState("");
  // let submitOrder = this.props.submitOrder;

  const tick = () => {
    if (over) return;
    if (s === 0) {
      setOver(true);
      setTimerClass("timer");
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
    console.log("has reset");
    nextOrder = false;
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  React.useEffect(() => {
    nextOrder === true && reset();
    console.log("i happen 2");
  }, [nextOrder]);

  return (
    <div className="timer">
      {console.log("i happen 3")}
      <p>
        {over === false && (
          <p>
            <AccessAlarmsIcon className="timerIcon" />
            <span className="timeLeft">{`${s
              .toString()
              .padStart(1, "0")}`}</span>
          </p>
        )}
      </p>
      <p>{over ? "Time's up, the customer has left!" : ""}</p>
      {/* <button onClick={() => reset()}>Restart</button> */}
    </div>
  );
};

export default CountDown;
