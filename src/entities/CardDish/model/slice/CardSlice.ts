import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FoodOne from "shared/assets/icons/FoodOne.png";
import SweDish from "shared/assets/icons/SweDish.png";
import SweBur from "shared/assets/icons/SweBurg.png";
import { CardDishState } from "../types/CardDishShema";

const initialState:CardDishState = {
  dish: [
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

 const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1; // Прямое изменение состояния (Immer под капотом)
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload; // Используем payload из действия
    // },
    // reset: (state) => {
    //   state.value = initialState.value; // Сброс до начального значения
    // },
  },
});

export const { actions: dishActions } = dishSlice;
export const { reducer: dishReducer } = dishSlice;