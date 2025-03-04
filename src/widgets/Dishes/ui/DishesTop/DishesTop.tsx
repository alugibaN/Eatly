import { useTranslation } from "react-i18next";
import cls from "./DishesTop.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import FoodOne from "shared/assets/icons/FoodOne.png";
import SweDish from "shared/assets/icons/SweDish.png";
import SweBur from "shared/assets/icons/SweBurg.png";
import DishesItem from "../DishesItem/DishesItem";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import Arrow from "shared/assets/icons/arrow-right-ser.svg";

interface DishesTopProps {
  className?: string;
}

const DishesTop = (props: DishesTopProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dish = [
    {
      img: FoodOne,
      property: "Healthy",
      name: "Chicken Hell",
      time: "24 min",
      star: 4.8,
      cost: 12,
    },
    {
      img: SweDish,
      property: "Healthy",
      name: "Swe Dish",
      time: "34 min",
      star: 4.9,
      cost: 19,
    },
    {
      img: SweBur,
      property: "Trending",
      name: "Swe Dish",
      time: "34 min",
      star: 4.9,
      cost: 19,
    },
    {
      img: FoodOne,
      property: "Healthy",
      name: "Chicken Hell",
      time: "24 min",
      star: 4.8,
      cost: 12,
    },
    {
      img: FoodOne,
      property: "Trending",
      name: "Swe Dish",
      time: "24 min",
      star: 4.8,
      cost: 19,
    },
  ];

  return (
    <section className={classNames(cls.dishesTop, {}, [className])}>
      <h2 className={cls.dishesTop__title}>
        Our Top
        <span className={cls.dishesTop__title_word}> Dishes</span>
      </h2>
      <ul className={cls.dishes}>
        {dish.map((el, i) => (
          <DishesItem obj={el} key={i} />
        ))}
      </ul>
      <AppLink theme={AppLinkTheme.VIEW_ALL} to={"/"} className={cls.applink}>
        View All <Arrow/>
      </AppLink>
    </section>
  );
};

export default DishesTop;
