import { createSlice } from "@reduxjs/toolkit";
import FoodOne from "shared/assets/icons/FoodOne.png";
import SweDish from "shared/assets/icons/SweDish.png";
import SweBur from "shared/assets/icons/SweBurg.png";



const initialState = {
  dishes: [
    {
      img: FoodOne,
      property: "Healthy",
      name: "Chicken Hell",
      time: "24 min",
      star: 4.8,
      cost: 12,
    },
    {
      img: SweDish,
      property: "Healthy",
      name: "Swe Dish",
      time: "34 min",
      star: 4.9,
      cost: 19,
    },
    {
      img: SweBur,
      property: "Trending",
      name: "Swe Dish",
      time: "34 min",
      star: 4.9,
      cost: 19,
    },
    {
      img: FoodOne,
      property: "Healthy",
      name: "Chicken Hell",
      time: "24 min",
      star: 4.8,
      cost: 12,
    },
    {
      img: FoodOne,
      property: "Trending",
      name: "Swe Dish",
      time: "24 min",
      star: 4.8,
      cost: 19,
    },
  ],
};

const dishesListSlice = createSlice({
  name: "dishesList",
  initialState,
  reducers: {

  }
})

export const {actions: ActionDishesList} = dishesListSlice
export const {reducer: ReducersDishesList} = dishesListSlice