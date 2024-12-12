import { useTranslation } from "react-i18next";
import cls from "./TopRestaurants.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import ChickenRest from "shared/assets/icons/ChickenRest.png";
import  Arrow from "shared/assets/icons/arrow-right.svg";
import Star from "shared/assets/icons/Star.svg";
import Bookmark from "shared/assets/icons/Bookmark.svg";
import AppLink from "shared/ui/appLink/AppLink";

interface TopRestaurantsProps {
  className?: string;
}

const TopRestaurants = (props: TopRestaurantsProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <section className={classNames(cls.TopRestaurants, {}, [className])}>
        <h2 className={cls.restaurant__title}>
          {t("Наш Топ")}
          <span className={cls.restaurant__title_last}>{t("Рестаранов")}</span>
        </h2>
        <ul className={cls.restaurant__spisok}>
          <li className={cls.restaurant__spisok_item}>
            <img className={cls.restaurant__img} src={ChickenRest} alt="ChickenRest" />
            <span className={cls.restaurant__healthy}>Healthy</span>
            <h3 className={cls.restaurant__spisok_item_title}>The Chicken King</h3>
            <div className={cls.restaurant__container_text_time}>    
                <p className={cls.restaurant__category}>24{t("мин")}</p>
                <Star  className={cls.restaurant__category_star}/>
                <span className={cls.restaurant__category_rating}>4.8</span> 
              <Bookmark className={cls.restaurant__category_bookmark}/>
            </div>
          </li>
          <li className={cls.restaurant__spisok_item}>
          <img className={cls.restaurant__img} src={ChickenRest} alt="ChickenRest" />
            <span className={cls.restaurant__healthy}>Healthy</span>
            <h3 className={cls.restaurant__spisok_item_title}>The Chicken King</h3>
            <div className={cls.restaurant__container_text_time}>
            <p className={cls.restaurant__category}>24{t("мин")}</p>
                <Star  className={cls.restaurant__category_star}/>
                <span className={cls.restaurant__category_rating}>4.8</span> 
              <Bookmark className={cls.restaurant__category_bookmark}/>
            </div>
          </li>
          <li className={cls.restaurant__spisok_item}>
          <img className={cls.restaurant__img} src={ChickenRest} alt="ChickenRest" />
            <span className={cls.restaurant__healthy}>Healthy</span>
            <h3 className={cls.restaurant__spisok_item_title}>The Chicken King</h3>
            <div className={cls.restaurant__container_text_time}>
            <p className={cls.restaurant__category}>24{t("мин")}</p>
                <Star  className={cls.restaurant__category_star}/>
                <span className={cls.restaurant__category_rating}>4.8</span> 
              <Bookmark className={cls.restaurant__category_bookmark}/>
            </div>
          </li>
        </ul>
    </section>
  );
};

export default TopRestaurants;
