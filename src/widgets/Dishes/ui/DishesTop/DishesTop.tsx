import { useTranslation } from "react-i18next";
import cls from "./DishesTop.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import Arrow from "shared/assets/icons/arrow-right-ser.svg";
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
          <AppLink
        type={AppLinkType.SECONDARY}
        to={"/menu"}
        size={AppLinkSize.SMALL}
        className={cls.applink}
      >
        View All <Arrow className={cls.arrow} />
      </AppLink>
    </section>
  );
};

export default DishesTop;
