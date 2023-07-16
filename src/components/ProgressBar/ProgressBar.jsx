import React from "react";
import "./ProgressBar.css";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  console.log(props)
  ProgressBar.propTypes = {
    type: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    needHours: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    needPoints: PropTypes.number.isRequired,
    actual: PropTypes.number.isRequired,
    need: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  let progress = 0;
  let measurableProgress = 0;
  let need;
  if (props.type == "Sport hours") {
    progress = props.hours / (props.needHours / 100);
    measurableProgress = props.hours;
    need = props.needHours;
  } else if (props.type == "Sport points") {
    progress = props.points / (props.needPoints / 100);
    measurableProgress = props.points;
    need = props.needPoints;
  } else if (props.type == "Challenge Bar") {
    progress = props.actual / (props.need / 100);
    measurableProgress = props.actual;
    need = props.need;
  } else {
    console.log("bad bar type recognission");
  }

  if(progress > 100) {
    progress = 100;
  }

  const getColor = () => {
    if (progress < 25) {
      return "#A92A04";
    } else if (progress < 50) {
      return "#FF9900";
    } else if (progress < 75) {
      return "#F8B005";
    } else {
      return "#7C9923";
    }
  };
  console.log(progress == 0);
  return (
    <div className="container">
      <div className="bar-name">{props.name}</div>
      <div className="description">{props.description}</div>
      <div className="progress-bar">
        <div
          data-testid="fill-bar"
          className={progress != 0 ? "progress-bar-fill" : "hide"}
          style={{ width: `${progress}%`, backgroundColor: getColor() }}
        ></div>
        <div className={progress != 0 ? "progress-value" : "progress-value-zero"}>
          {measurableProgress}/{need}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
