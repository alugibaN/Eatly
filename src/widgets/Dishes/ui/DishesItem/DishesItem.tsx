import React from "react";
import cls from "./DishesItem.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import FoodOne from "shared/assets/icons/FoodOne.png";
import Heart from "shared/assets/icons/Heart.svg";
import Star from "shared/assets/icons/Star.svg";

type TDish = {
  img: string;
  property: string;
  name: string;
  time: string;
  star: number;
  cost: number;
} ;


interface DishesItemProps {
  className?: string;
  obj?: TDish
}

const DishesItem = (props: DishesItemProps) => {
  const { className, obj } = props;
  return (
    <li className={cls.dish}>
      <Heart className={cls.dish__heart} />
      <img className={cls.dish__img} src={obj.img} alt="Food" />
      <span className={cls.dish__heathy}>{obj.property}</span>
      <h3 className={cls.dish__title}>{obj.name}</h3>
      <div className={cls.dish__info}>
        <span className={cls.dish__info_time}>{obj.time}</span>
        <Star className={cls.dish__info_star} />
        <span className={cls.dish__info_rating}>{obj.star}</span>
      </div>
      <div className={cls.dish__cost}>
        <p className={cls.dish__cost_title}>
          {`$${obj.cost}.`}
          <span className={cls.dish__cost_subtitle}>99</span>
        </p>
        <div className={cls.dish__cost_add}>+</div>
      </div>
    </li>
  );
};

export default DishesItem;
