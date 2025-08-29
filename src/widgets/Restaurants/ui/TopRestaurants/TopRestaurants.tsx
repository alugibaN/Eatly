import { useTranslation } from "react-i18next";
import cls from "./TopRestaurants.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
// import Arrow from "shared/assets/icons/arrow-right-ser.svg";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import { ListRestaurant } from "features/ListRestaurant";

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
      <ListRestaurant />
      <AppLink
        type={AppLinkType.SECONDARY}
        to={"/menu"}
        size={AppLinkSize.SMALL}
        className={cls.applink}
      >
        View All
      </AppLink>
    </section>
  );
};

export default TopRestaurants;
