import type { CardDishState } from "entities/CardDish"; 
import type { ListDishesShema } from "features/ListDishes";
import type { listRestaurantState } from 'features/ListRestaurant/index'

export interface StateSchema {
  dish: CardDishState;
  dishesList: ListDishesShema,
  restaurantList: listRestaurantState
}