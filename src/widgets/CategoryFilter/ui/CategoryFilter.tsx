import React, { useEffect, useState } from "react";
import cls from "./CategoryFilter.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Pizza from "shared/assets/icons/Pizza.svg";
import Asian from "shared/assets/icons/Hotdog.svg";
import Donat from "shared/assets/icons/Doughnut.svg";
import Ice from "shared/assets/icons/Icecream.svg";
import Button from "shared/ui/button/Button";
import { text } from "stream/consumers";
import RangeWithMarks from "./RangeWithMarks/RangeWithMarks";

interface CategoryFilterProps {
  className?: string;
}
interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}

let valueInpuButton = [
  {
    id: 1,
    text: "Recomended",
  },
  {
    id: 2,
    text: "Fast Delivery",
  },
  {
    id: 3,
    text: "Most Popular",
  },
];
let categoryFood = [
  {
    id: 1,
    text: "Pizza",
    img: <Pizza className={cls.category__food_icons} />,
  },
  {
    id: 2,
    text: "Asian",
    img: <Asian className={cls.category__food_icons} />,
  },
  {
    id: 3,
    text: "Donat",
    img: <Donat className={cls.category__food_icons} />,
  },
  {
    id: 4,
    text: "Ice",
    img: <Ice className={cls.category__food_icons} />,
  },
];

const CategoryFilter = (props: CategoryFilterProps) => {
  const { className } = props;

  const [activButton, setActiveButton] = useState(null);
  const [categoryEat, setCategoryEat] = useState(null);

  let addClassactive = (index: number) => {
    if (index === activButton) setActiveButton(null);
    else setActiveButton(index);
  };
  const addClassCategoryFood = (value: string) => {
    if (value === categoryEat) setCategoryEat(null);
    else setCategoryEat(value);
  };

  return (
    <div className={classNames(cls.CategoryFilter, {}, [className])}>
      <h3 className={cls.title}>Category</h3>
      <div className={cls.category__spisok_food}>
        {categoryFood.map((el) => (
          <button
            key={el.id}
            className={classNames(
              cls.category__food,
              { [cls[`${el.text}__active`]]: categoryEat === el.text },
              [cls[el.text]]
            )}
            onClick={()=>addClassCategoryFood(el.text)}
          >
            {el.img}
            <h4 className={cls.category__food_title}>{el.text}</h4>
          </button>
        ))}
      </div>
    <h3 className={cls.title}>Sort By</h3>
      <div className={cls.sortBySpisok}>
        {valueInpuButton.map((el, index) => (
          <input
            key={el.id}
            onClick={() => addClassactive(index)}
            type="button"
            value={el.text}
            className={`${cls.sortBySpisok__item} ${
              activButton === index ? cls.active : ""
            }`}
          />
        ))}
      </div>
      {/* <h3 className={cls.title}>Price</h3>
      <RangeWithMarks/>
      <Button theme={ButtonTheme.PRIMARY} className={cls.button}>
        Apply
      </Button> */}
    </div>
  );
};

export default CategoryFilter;
