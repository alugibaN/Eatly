import { useTranslation } from "react-i18next";
import cls from "./TopRestaurants.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import ChickenRest from "shared/assets/icons/ChickenRest.png";
import  Arrow from "shared/assets/icons/arrow-right.svg";
import Start from "shared/assets/icons/Star.svg";
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
      {/* <div className={cls. restaurant}> */}
        <h2 className={cls.restaurant__title}>
          {t("Наш Топ")}
          <span className={cls.restaurant__title_last}>{t("Рестаранов")}</span>
        </h2>

        <ul className={cls.restaurant__spisok}>
          <li className={cls.restaurant__spisok_item}>
            <img className={cls.restaurant__img} src={ChickenRest} alt="ChickenRest" />
            {/* <div className={cls.restaurant__container__text}> */}
            <span className={cls.restaurant__healthy}>Healthy</span>
            <h3 className={cls.restaurant__spisok_item_title}>The Chicken King</h3>
            <div className={cls.restaurant__container_text_time}>
              <span className={cls.restaurant__category}>
                <p>24{t("мин")}</p>
                <Start />
                <span>4.8</span>
              </span>
              <Bookmark />
            </div>
            {/* </div> */}
          </li>
          <li className={cls.restaurant__spisok_item}>
          <img className={cls.restaurant__img} src={ChickenRest} alt="ChickenRest" />
            {/* <div className={cls.restaurant__container__text}> */}
            <span className={cls.restaurant__healthy}>Healthy</span>
            <h3 className={cls.restaurant__spisok_item_title}>The Chicken King</h3>
            <div className={cls.restaurant__container_text_time}>
              <span className={cls.restaurant__category}>
                <p>24{t("мин")}</p>
                <Start />
                <span>4.8</span>
              </span>
              <Bookmark />
            </div>
            {/* </div> */}
          </li>
          <li className={cls.restaurant__spisok_item}>
          <img className={cls.restaurant__img} src={ChickenRest} alt="ChickenRest" />
            {/* <div className={cls.restaurant__container__text}> */}
            <span className={cls.restaurant__healthy}>Healthy</span>
            <h3 className={cls.restaurant__spisok_item_title}>The Chicken King</h3>
            <div className={cls.restaurant__container_text_time}>
              <span className={cls.restaurant__category}>
                <p>24{t("мин")}</p>
                <Start />
                <span>4.8</span>
              </span>
              <Bookmark />
            </div>
            {/* </div> */}
          </li>
          {/* <AppLink className={cls.link} to={"/"}>View All <Arrow/></AppLink> */}
        </ul>
      {/* </div> */}
    </section>
  );
};

export default TopRestaurants;
