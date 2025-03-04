import React, { useState } from "react";
import cls from "./MiniDish.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Food from "shared/assets/icons/Food.png";


type TDish = {
  img: string;
  title: string,
  subtitle: string;
  time: string;
} ;

interface MiniDishProps {
    className?: string,
    item: TDish
}

const MiniDish = (props: MiniDishProps) => {
  const {className, item} = props 
  let [canclled, setCanclled] = useState(true)

  let mods:Record<string, boolean> = {
    [cls['cancelled']]: item.subtitle === "Cancelled"
  }

  return (
    <li className={classNames(cls.MiniDish, {}, [className])}>
            <img
              className={cls.dish__food_mini_img}
              src={item.img}
              alt="Mini-Food"
            />
            <div className={cls.dish__food_mini_container}>
              <h4 className={cls.dish__food_mini_title}>{item.title}</h4>
              <p className={classNames(cls.dish__food_mini_subtitle, mods, [])}>{item.subtitle}</p>
            </div>
            <p className={cls.dish__food_mini_time}>{item.time}</p>
    </li>
  )
};

export default MiniDish;
