import { useTranslation } from "react-i18next";
import cls from "./BannerApp.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Mobail from "shared/assets/icons/Mobile.png";
import AppLink, { AppLinkSize, AppLinkTheme } from "shared/ui/appLink/AppLink";
import Arrow from "shared/assets/icons/arrow-right.svg";
import Vector from "shared/assets/icons/VectorApp.svg";

interface BannerAppProps {
  className?: string;
}

const BannerApp = (props: BannerAppProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.bunner, {}, [className])}>
      <img className={cls.bunner__app_img} src={Mobail} alt="Mobail" />
      <ul className={cls.bunner__text_container}>
        <h2 className={cls.bunner__text_title}>
          {t("Премиум")}
          <span className={cls.bunner__text_quality}>{t("Качество")}</span>
          {t("Для вашего здоровья")}
        </h2>
        <li className={cls.bunner__text_list}>{t("Премиум продукты")}</li>
        <li className={cls.bunner__text_list}>{t("Эти продукты")}</li>
        <AppLink
          className={cls.bunner__text_button}
          theme={AppLinkTheme.PRIMARY}
          size={AppLinkSize.sizeL}
          to={"/"}
        >
          {t("Загрузить")} 
          <Arrow className={cls.bunner__text_button_arrow} />
        </AppLink>
        <Vector className={cls.bunner__vectore} />
      </ul>
    </div>
  );
};

export default BannerApp;
