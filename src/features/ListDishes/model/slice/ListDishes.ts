import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ListDishesShema } from "../types/ListDishesShema";

const initialState: ListDishesShema = {
  dishes: [],
  status: "idle",
  error: null,
};



export const  fetchCardValue = createAsyncThunk<
  number,
  void, 
  {rejectValue: string}
>(
  "dish/getCard",
  async (_, { rejectWithValue }) => {
  try {
      const response = await fetch('https://api');
      if (!response.ok) {
        throw new Error('Network error');
      }
      const data = await response.json();
      return data.value; 
    } catch (error) {
      return rejectWithValue('Failed to fetch counter value'); 
    }
  }
)




const dishesListSlice = createSlice({
  name: "dishesList",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.
  //   getCards(
  // }
});

export const { actions: ActionDishesList } = dishesListSlice;
export const { reducer: ReducersDishesList } = dishesListSlice;

