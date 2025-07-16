import React from "react";
import cls from "./CardRestaurant.module.scss";
import Star from "shared/assets/icons/Star.svg";
import Bookmark from "shared/assets/icons/Bookmark.svg";
import { IlistRestaurant } from "../model/types/CardRestaurant";


interface CardRestaurantProps {
  className?: string;
  restaurant: IlistRestaurant;
}

const CardRestaurant = (props: CardRestaurantProps) => {
  const { restaurant } = props;

  return (
    <li className={cls.restaurant__spisok_item}>
      <img className={cls.restaurant__img} src={restaurant.img} alt="ChickenRest" />
      <span className={cls.restaurant__healthy}>{restaurant.property}</span>
      <h3 className={cls.restaurant__spisok_item_title}>{restaurant.name}</h3>
      <div className={cls.restaurant__container_text_time}>
        <span className={cls.restaurant__category}>{restaurant.time}</span>
        <Star className={cls.restaurant__category_star} />
        <span className={cls.restaurant__category_rating}>{restaurant.star}</span>
        <Bookmark className={cls.restaurant__category_bookmark} />
      </div>
    </li>
  );
};

export default CardRestaurant;
