import { useTranslation } from "react-i18next";
import cls from "./TopRestaurants.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import ChickenRest from "shared/assets/icons/ChickenRest.png";
import burgerKing from "shared/assets/icons/BurgerKing.png"
import  Arrow from "shared/assets/icons/arrow-right-ser.svg";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import ItemRestaurants from "../ItemRestaurants/ItemRestaurants";
import { ListRestaurant } from "features/ListRestaurant";


interface TopRestaurantsProps {
  className?: string;
}

const TopRestaurants = (props: TopRestaurantsProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const rest = [
    {
      img: ChickenRest,
      name: "The Chicken King",
      property: 'Healthy',
      time: "24 min",
      stars: 4.8,
    },
    {
      img: burgerKing,
      name: "The Burger King",
      property: 'Trending',
      time: "24 min",
      stars: 4.9,
    },
    {
      img: ChickenRest,
      name: "Pizza",
      property: 'Healthy',
      time: "24 min",
      stars: 4.8,
    },
  ]


  return (
    <section className={classNames(cls.TopRestaurants, {}, [className])}>
        <h2 className={cls.restaurant__title}>
          {t("Наш Топ")}
          <span className={cls.restaurant__title_last}>{t("Рестаранов")}</span>
        </h2>
          <ListRestaurant/>
        <div>
          
        </div>
        <AppLink theme={AppLinkTheme.VIEW_ALL} to={"/blog"} className={cls.applink}>
        View All <Arrow className={cls.arrow}/>
      </AppLink>
    </section>
  );
};

export default TopRestaurants;
