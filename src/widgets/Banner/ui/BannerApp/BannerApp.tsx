import { useTranslation } from "react-i18next";
import cls from "./BannerApp.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import Mobail from "shared/assets/img/Mobile.png";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import { UiIcons } from "shared/assets/icons/UIIcons";

interface BannerAppProps {
  className?: string;
}

const BannerApp = (props: BannerAppProps) => {
  const { className } = props;
  const { t } = useTranslation();

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
          <UiIcons.rightArrow type={"secondary"} /> 
        </AppLink>
        <UiIcons.curvedArrow type={"primary"} className={cls.bunner__vectore} />
      </ul>
    </div>
  );
};

export default BannerApp;
