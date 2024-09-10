import React, { useState } from "react";
import classes from "./counter.module.scss";

const Counter = () => {
  const [value, setValue] = useState(0);

  const incriment = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div className={classes.btn}>
      <button className={classes.btn} onClick={incriment}>
        +++
      </button>
      <span>{value}</span>
    </div>
  );
};

export default Counter;
