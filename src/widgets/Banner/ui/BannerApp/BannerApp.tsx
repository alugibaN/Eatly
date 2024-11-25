import { useTranslation } from "react-i18next";
import cls from "./BannerApp.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Button from "shared/ui/button/Button";
import Mobail from "shared/assets/icons/Mobile.png"
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import  Arrow from "shared/assets/icons/arrow-right.svg";

 interface BannerAppProps {
 className?: string
}

const BannerApp = (props: BannerAppProps) => {
  const {className} = props 
  const {t} = useTranslation()
  
  return (
     <section className={classNames(cls.bunner, {}, [className])}>
      <img className={cls.bunner__app_img} src={Mobail} alt="Mobail" />
      <ul className={cls.bunner__text_container}>
        <h2 className={cls.bunner__text_title}>
          {t("Премиум")} 
          <span className={cls.bunner__text_quality}>
            {t("Качество")}
          </span>
          {t("Для вашего здоровья")}
        </h2>
        <li className={cls.bunner__text_list}>{t("Премиум продукты")}</li>
        <li className={cls.bunner__text_list}>{t("Эти продукты")}</li>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t("Загрузить")} <Arrow/></AppLink>     
      </ul>
    </section>
  )
};

export default BannerApp;
