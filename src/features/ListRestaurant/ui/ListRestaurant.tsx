import React from "react";
import cls from "./ListRestaurant.module.scss";
import { useSelector } from "react-redux";
import { getRestaurantValue } from "../model/selectors/getRestaurant/getRestaurantValue";
import CardRestaurant from "entities/CardRestaurant/ui/CardRestaurant";
interface ListRestaurantProps {
  className?: string;
}

const ListRestaurant = (props: ListRestaurantProps) => {
  const { className } = props;
  const restaurants = useSelector(getRestaurantValue);

  console.log(restaurants);

  return (
    <ul className={cls.restaurant__spisok}>
       {restaurants.map((restaurant, index)=> <CardRestaurant restaurant={restaurant} key={index}/> )} 
    </ul>
  );
};

export default ListRestaurant;
