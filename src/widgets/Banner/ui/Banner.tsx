import cls from "./Banner.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Trustpilot from "../../../shared/assets/icons/trust-reviews.png";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkSize, AppLinkTheme } from "shared/ui/appLink/AppLink";
import BannerFood from "shared/assets/icons/BannerFood.png"
import { useState } from "react";
import useSizeWindow from "shared/lib/hooks/useSizeWindow/useSizeWindow";

interface BannerProps {
  className?: string;
}

const Banner = (props: BannerProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const {windowWidth} = useSizeWindow()
  const [sizelinkButton, setSizeLinkButton] = useState(AppLinkSize.sizeM)


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
            <span className={cls.bunner__text_subtitle_bonus}>{t("20 бонусов")}</span>
            </p>
          <div className={cls.bunner__text_buttons}>
            <AppLink
              className={cls.banner__text_button}
              theme={AppLinkTheme.PRIMARY}
              size={AppLinkSize.sizeL}
              to={"/"}
            >
              {t("Начать")}
            </AppLink>
            <AppLink theme={AppLinkTheme.BORDER_PRIMARY} to={"/"}>
              {t("Перейти на Pro")}
            </AppLink>
          </div>
          <div className={cls.bunner__text_trustpilot}>
            <img src={Trustpilot} />
          </div>
        </div>
      </div>
      <img className={cls.banner__food} src={BannerFood} alt="img" />
    </section>
  );
};

export default Banner;
