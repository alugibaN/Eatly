import React, { useEffect, useState } from "react";
import cls from "./CardRestaurant.module.scss";
import Star from "shared/assets/img/Star.svg";
import Bookmark from "shared/assets/img/Bookmark.svg";
import { IlistRestaurant } from "../model/types/CardRestaurant";
import { classNames } from "shared/utils/classNames/ClassNames";

interface CardRestaurantProps {
  className?: string;
  restaurant: IlistRestaurant;
}

const CardRestaurant = (props: CardRestaurantProps) => {
  const { restaurant } = props;
  const [favorite, setFavorite] = useState(false);
  const mods: Record<string, boolean> = {
    [cls.favorite]: favorite,
  };

  const checkingFavorites = (user: string) => {
    if (user === "we9ry98uihjn1a9sf75sa2d") setFavorite(!favorite);
  };
   const cheangeFavorite = () =>{

   }

  useEffect(()=>{
    checkingFavorites(restaurant.users[0])
  }, [])

  return (
    <li className={cls.restaurant__spisok_item}>
      <img
        className={cls.restaurant__img}
        src={restaurant.img}
        alt="ChickenRest"
      />
      <span className={cls.restaurant__healthy}>{restaurant.property}</span>
      <h3 className={cls.restaurant__spisok_item_title}>{restaurant.name}</h3>
      <div className={cls.restaurant__container_text_time}>
        <span className={cls.restaurant__category}>{restaurant.time}</span>
        <Star className={cls.restaurant__category_star} />
        <span className={cls.restaurant__category_rating}>
          {restaurant.star}
        </span>
        <div className={cls.restaurant__circle}>
          <Bookmark
            className={classNames(cls.restaurant__category_bookmark, mods, [])}
          />
        </div>
      </div>
    </li>
  );
};

export default CardRestaurant;


  // Pizza
  // Asian
  // Donat
  // Ice
  // Chiken
  // Spacy