import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Logo from "shared/assets/icons/logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import LangSwitcher from "widgets/LangSwwitcher/LangSwitcher";

interface NavbarProps {
  className?: string;
}

function Navbar(props: NavbarProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    // <div className={classNames(cls.navbar, {}, [className])}>
        <header className={cls.navbar__header}>
      <Logo  className={cls.logo}/>
      <div className={cls.links}>
        <AppLink to={"/"}>{t("Меню")}</AppLink>
        <AppLink to={"/"}>{t("Блог")}</AppLink>
        <AppLink to={"/"}>{t("Ценообразование")}</AppLink>
        <AppLink to={"/"}>{t("Контакты")}</AppLink>
      </div>
      <div className={classNames(cls.auth, {}, [])}>
      <LangSwitcher/>
        <AppLink to={"/"}>{t("Авторизация")}</AppLink>
        <AppLink className="pd" theme={AppLinkTheme.SECONDARY} to={"/"}>{t("Регистрация")}</AppLink>
      </div>
        </header>
    // </div>
  );
}

export default Navbar;
