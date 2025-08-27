import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardDishState } from "../types/CardDishShema";

const initialState:CardDishState = {
  dish: [],
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