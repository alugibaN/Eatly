import React from "react"
import cls from "./ListDishes.module.scss"
import { getCardValue } from "../model/selectors/GetCardValue/GetCardValue";
import { useSelector } from "react-redux";
import { CardDish } from "entities/CardDish";

 interface CardListProps {
 className?: string
}

const ListDishes = (props: CardListProps) => {
  const {className} = props 
  const dishes = useSelector(getCardValue) 
  return (
     <ul className={cls.dishes} >
      {dishes.map((dish, index)=> <CardDish dish={dish} key={index} />)}
    </ul>
  )
};

export default ListDishes;
