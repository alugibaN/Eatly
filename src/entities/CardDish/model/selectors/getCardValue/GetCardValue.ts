import { createSelector } from "@reduxjs/toolkit";
import { getCard } from "../getCard/GetCard";

export const getCardValue = createSelector(getCard, (card)=> card.dish)