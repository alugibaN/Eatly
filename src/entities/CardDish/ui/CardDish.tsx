import React from "react";
import cls from "./CardDish.module.scss";
import Heart from "shared/assets/icons/Heart.svg";
import Star from "shared/assets/icons/Star.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCardValue } from "../model/selectors/getCardValue/GetCardValue";
import { DishState } from "../model/types/CardDishShema";


interface CardDishProps {
  className?: string;
  dish?: DishState;
}

const CardDish = (props: CardDishProps) => {
  const { dish } = props;
  const  dispatch = useDispatch()

  return (
    <li className={cls.dish}>
      <Heart className={cls.dish__heart} />
      <img className={cls.dish__img} src={dish.img} alt="Food" />
      <span className={cls.dish__heathy}>{dish.property}</span>
      <h3 className={cls.dish__title}>{dish.name}</h3>
      <div className={cls.dish__info}>
        <span className={cls.dish__info_time}>{dish.time}</span>
        <Star className={cls.dish__info_star} />
        <span className={cls.dish__info_rating}>{dish.star}</span>
      </div>
      <div className={cls.dish__cost}>
        <p className={cls.dish__cost_title}>
          {`$${dish.cost}.`}
          <span className={cls.dish__cost_subtitle}>99</span>
        </p>
        <button className={cls.dish__cost_add}>+</button>
      </div>
    </li>
  );
};

export default CardDish;
