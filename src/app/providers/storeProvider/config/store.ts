import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { dishReducer } from "entities/CardDish";
import { ReducersDishesList } from "features/ListDishes";
import { RestaurantListReducers } from "features/ListRestaurant";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      dish: dishReducer,
      dishesList: ReducersDishesList,
      restaurantList: RestaurantListReducers
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

// export type RootState = ReturnType<typeof createReduxStore.getState
