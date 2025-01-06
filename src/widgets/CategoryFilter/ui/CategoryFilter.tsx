import React from "react";
import cls from "./CategoryFilter.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Pizza from "shared/assets/icons/Pizza.svg";
import Asian from "shared/assets/icons/Hotdog.svg";
import Donat from "shared/assets/icons/Doughnut.svg";
import Ice from "shared/assets/icons/Icecream.svg";

 interface CategoryFilterProps {
 className?: string
}

const CategoryFilter = (props: CategoryFilterProps) => {
  const {className} = props 
  return (
     <div className={classNames(cls.CategoryFilter, {}, [className])}>
      <h3 className={cls.title}>Category</h3>
      <ul className={cls.category__spisok_food}>
        <li className={cls.category__food}>
          <Pizza className={cls.category__food_icons}/>
          <h4 className={cls.category__food_title}>Pizza</h4>
        </li>
        <li className={cls.category__food}>
          <Asian className={cls.category__food_icons}/>
          <h4 className={cls.category__food_title}>Asian</h4>
        </li>
        <li className={cls.category__food}>
          <Donat className={cls.category__food_icons}/>
          <h4 className={cls.category__food_title}>Donat</h4>
        </li>
        <li className={cls.category__food}>
          <Ice className={cls.category__food_icons}/>
          <h4 className={cls.category__food_title}>Ice</h4>
        </li>
      </ul>
      <h3>Sort By</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h3>Price</h3>
      <div>
        div
      </div>
      <button>Apply</button>
    </div>
  )
};

export default CategoryFilter;
