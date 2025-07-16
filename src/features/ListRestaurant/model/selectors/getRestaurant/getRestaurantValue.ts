import { createSelector } from "@reduxjs/toolkit";
import { getState } from "../getState/getState";

export const getRestaurantValue = createSelector(getState, (rest)=> rest.restaurants)