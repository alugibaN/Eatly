import cls from "./Banner.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Trustpilot from "../../../shared/assets/icons/trust-reviews.png";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import BannerFood from "shared/assets/icons/BannerFood.png";
import { useState } from "react";
import useSizeWindow from "shared/lib/hooks/useSizeWindow/useSizeWindow";

interface BannerProps {
  className?: string;
}

const Banner = (props: BannerProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const { windowWidth } = useSizeWindow();

  return (
    <section className={classNames(cls.banner, {}, [className])}>
      <div className={cls.bunner__text}>
        <div className={cls.bunner__text_container}>
          <p className={cls.bunner__text_users}>
            {t("БОЛЕЕ 1000 ПОЛЬЗОВАТЕЛЕЙ")}
          </p>
          <h1 className={cls.bunner__text_title}>
            {t("Наслаждайтесь Едой Со Всего")}
            <span className={cls.bunner__text_title_world}>{t("Мира")}</span>
          </h1>
          <p className={cls.bunner__text_subtitle}>
            {t("Вкусная помощь")}
            <span className={cls.bunner__text_subtitle_bonus}>
              {t("20 бонусов")}
            </span>
          </p>
          <div className={cls.bunner__text_buttons}>
            <AppLink
              className={cls.banner__text_button}
              type={AppLinkType.PRIMARY}
              size={windowWidth < 630 ? AppLinkSize.SMALL : AppLinkSize.MEDIUM}
              to={"/menu"}
            >
              {t("Начать")}
            </AppLink>
            <AppLink
              className={cls.banner__text_button}
              type={AppLinkType.SECONDARY}
              size={AppLinkSize.MEDIUM}
              border={true}
              to={"/pricing"}
            >
              {t("Перейти на Pro")}
            </AppLink>
          </div>
          <div className={cls.bunner__text_trustpilot_container}>
            <img src={Trustpilot} className={cls.bunner__text_trustpilot} />
          </div>
        </div>
      </div>
      <img className={cls.banner__food} src={BannerFood} alt="img" />
    </section>
  );
};

export default Banner;

// <section className={cls.banner}>
// <div className={cls.text}>
//   <h1 className={cls.banner__title}>Eatly Сервис заказа еды и планирования питания</h1>
//   {/* <p className={cls.banner__subtitle}>

//   </p> */}
//    <p>
//    «Питайтесь правильно без усилий»
//    Доставка готовых рационов и планирование меню на неделю.
//    </p>
// </div>
//  <div className={cls.icon}>

//  </div>
// </section>
