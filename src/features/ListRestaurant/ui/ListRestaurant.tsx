import cls from "./ListRestaurant.module.scss";
import { useSelector } from "react-redux";
import { getRestaurantValue } from "../model/selectors/getRestaurant/getRestaurantValue";
import CardRestaurant from "entities/CardRestaurant/ui/CardRestaurant";
interface ListRestaurantProps {
  className?: string;
}

const ListRestaurant = (props: ListRestaurantProps) => {
  const restaurants = useSelector(getRestaurantValue);

  return (
    <ul className={cls.restaurant__spisok}>
       {restaurants.map((restaurant)=> <CardRestaurant restaurant={restaurant} key={restaurant.id}/> )} 
    </ul>
  );
};

export default ListRestaurant;
