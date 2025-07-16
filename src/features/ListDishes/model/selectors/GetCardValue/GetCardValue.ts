import { createSelector } from "@reduxjs/toolkit";
import { GetCards } from "../GetDishes/GetCards";

export const getCardValue = createSelector(GetCards, (card)=> card.dishes)