
export interface DishState {
  img: string;
  property: string;
  name: string;
  time: string;
  star: number;
  cost: number;
}

export interface  CardDishState {
  dish:DishState[];
}
