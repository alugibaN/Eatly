 import cls from "./Banner.module.scss"
 import { classNames } from "shared/lib/classNames/ClassNames"
 import Food from "../../../shared/assets/icons/Food.png"
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
 
  interface BannerProps {
  className?: string
 }
 
 const Banner = (props: BannerProps) => {
  const {t} = useTranslation()
   const {className} = props 
   return (
      <div className={classNames(cls.banner, {}, [className])}>
       <div className={cls.bunner__text}>
          <p>---{t("БОЛЕЕ 1000 ПОЛЬЗОВАТЕЛЕЙ")}</p>
          <h1>{t("Наслаждайтесь Едой Со Всего Мира")}</h1>
          <h2>{t("20 доллоров")}</h2>
          <div className={cls.bunner__text_buttons}>
          <AppLink className={cls.banner__text_button} theme={AppLinkTheme.SECONDARY}  to={"/"}>{t("Начать")}</AppLink>
          <AppLink theme={AppLinkTheme.BORDER_PRIMARY} to={"/"}>{t("Перейти на Pro")}</AppLink>
          </div>
       </div>
       <div className={cls.banner__food}>
        <img className={cls.bunner__food_img} src={Food} alt="Food" />
       </div>

     </div>
   )
 };
 
 export default Banner;
 