import { DishState } from "entities/CardDish";

export interface ListDishesShema {
dishes: DishState[],
status: "idle" | "loading" | "succeded" | "failed",
error: string | null,
}