import React from "react"
import cls from "./ItemRestaurants.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import ChickenRest from "shared/assets/icons/ChickenRest.png";
import Star from "shared/assets/icons/Star.svg";
import Bookmark from "shared/assets/icons/Bookmark.svg";
import { useTranslation } from "react-i18next";

  type TRestaurant={
          img: string,
          name: string,
          property: string,
          time: string,
          stars: number,
  }

 interface ItemRestaurantsProps {
  className?: string,
  obj?: TRestaurant,

}

const ItemRestaurants = (props: ItemRestaurantsProps) => {
  const { className, obj } = props;
  
  return (
    <li className={cls.restaurant__spisok_item}>
    <img className={cls.restaurant__img} src={obj.img} alt="ChickenRest" />
    <span className={cls.restaurant__healthy}>{obj.property}</span>
    <h3 className={cls.restaurant__spisok_item_title}>{obj.name}</h3>
    <div className={cls.restaurant__container_text_time}>    
        <span className={cls.restaurant__category}>{obj.time}</span>
        <Star  className={cls.restaurant__category_star}/>
        <span className={cls.restaurant__category_rating}>{obj.stars}</span> 
      <Bookmark className={cls.restaurant__category_bookmark}/>
    </div>
  </li>
  )
};

export default ItemRestaurants;
