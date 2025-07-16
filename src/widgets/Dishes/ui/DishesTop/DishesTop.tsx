import { useTranslation } from "react-i18next";
import cls from "./DishesTop.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import FoodOne from "shared/assets/icons/FoodOne.png";
import SweDish from "shared/assets/icons/SweDish.png";
import SweBur from "shared/assets/icons/SweBurg.png";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import Arrow from "shared/assets/icons/arrow-right-ser.svg";
import { CardDish } from "entities/CardDish";
import { ListDishes } from "features/ListDishes";

interface DishesTopProps {
  className?: string;
}

const DishesTop = (props: DishesTopProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={classNames(cls.dishesTop, {}, [className])}>
      <h2 className={cls.dishesTop__title}>
        Our Top
        <span className={cls.dishesTop__title_word}> Dishes</span>
      </h2>
      <ListDishes/>
      {/* <ul className={cls.dishes}>
        {dish.map((el, i) => (
          <CardDish dish={el} key={i} />
        ))}
      </ul> */}
      <AppLink theme={AppLinkTheme.VIEW_ALL} to={"/"} className={cls.applink}>
        View All <Arrow/>
      </AppLink>
    </section>
  );
};

export default DishesTop;
