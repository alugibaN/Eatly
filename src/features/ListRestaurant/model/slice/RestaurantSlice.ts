import { createSlice } from "@reduxjs/toolkit";
import { listRestaurantState } from "../types/ListRestaurantShema";

const initialState: listRestaurantState = {
  restaurants: [],
};

const listRestaurantSlice = createSlice({
  name: "list-restaurant",
  initialState,
  reducers: {},
});

export const { actions: RestaurantListAction } = listRestaurantSlice;
export const { reducer: RestaurantListReducers } = listRestaurantSlice