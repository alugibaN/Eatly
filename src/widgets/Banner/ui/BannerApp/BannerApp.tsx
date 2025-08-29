import { useTranslation } from "react-i18next";
import cls from "./BannerApp.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Mobail from "shared/assets/icons/Mobile.png";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import Arrow from "shared/assets/icons/arrow-right.svg";
import Vector from "shared/assets/icons/VectorApp.svg";
import useSizeWindow from "shared/lib/hooks/useSizeWindow/useSizeWindow";

interface BannerAppProps {
  className?: string;
}

const BannerApp = (props: BannerAppProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { windowWidth } = useSizeWindow();

  return (
    <div className={classNames(cls.bunner, {}, [className])}>
      <img className={cls.bunner__app_img} src={Mobail} alt="Mobail" />
      <h2 className={cls.bunner__text_title}>
        {t("Премиум")}
        <span className={cls.bunner__text_quality}>{t("Качество")}</span>
        {t("Для вашего здоровья")}
      </h2>
      <ul className={cls.bunner__text_container}>
        <li className={cls.bunner__text_list}>{t("Премиум продукты")}</li>
        <li className={cls.bunner__text_list}>{t("Эти продукты")}</li>
        <AppLink
          className={cls.bunner__text_button}
          type={AppLinkType.PRIMARY}
          size={AppLinkSize.LARGE}
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
