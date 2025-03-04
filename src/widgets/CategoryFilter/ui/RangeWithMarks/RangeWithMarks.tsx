import React, { useState } from "react";
import cls from "./RangeWithMarks.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";

interface RangeWithMarksProps {
  className?: string;
}

const RangeWithMarks = (props: RangeWithMarksProps) => {
  const { className } = props;
  const [change, setCheng] = useState("25");

  return (
    <div className={classNames(cls.RangeWithMarks, {}, [className])}>
      <input
        type="range"
        min="1"
        max="1000"
        defaultValue={change}
        className={cls.circle}
        id="myRange"
        onChange={(e) => setCheng(e.target.value)}
        list="value"
      />
      <datalist id="value">
        <option label="0%" value="0" className={cls.price__spisok_cost} />
        <option value="25" className={cls.price__spisok_cost}>
          $25
        </option>
        <option value="50" className={cls.price__spisok_cost}>
          $50
        </option>
        <option value="100" className={cls.price__spisok_cost}>
          1000
        </option>
        <option label="50%" value="500" className={cls.price__spisok_cost}>
          $500
        </option>
        <option label="100%" value="1000" className={cls.price__spisok_cost}>
          $1000
        </option>
      </datalist>
    </div>
  );
};

export default RangeWithMarks;
