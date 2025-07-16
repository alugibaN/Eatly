import ChickenRest from "shared/assets/icons/ChickenRest.png";
import burgerKing from "shared/assets/icons/BurgerKing.png";
import { createSlice } from "@reduxjs/toolkit";
import { listRestaurantState } from "../types/ListRestaurantShema";

const initialState: listRestaurantState = {
  restaurants: [
    {
      img: ChickenRest,
      name: "The Chicken King",
      property: "Healthy",
      time: "24 min",
      star: 4.8,
    },
    {
      img: burgerKing,
      name: "The Burger King",
      property: "Trending",
      time: "24 min",
      star: 4.9,
    },
    {
      img: ChickenRest,
      name: "Pizza",
      property: "Healthy",
      time: "24 min",
      star: 4.8,
    },
  ],
};

const listRestaurantSlice = createSlice({
  name: "list-restaurant",
  initialState,
  reducers: {},
});

export const { actions: RestaurantListAction } = listRestaurantSlice;
export const { reducer: RestaurantListReducers } = listRestaurantSlice