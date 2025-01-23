import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Logo from "shared/assets/icons/logo.svg";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import LangSwitcher from "widgets/LangSwwitcher/LangSwitcher";

interface NavbarProps {
  className?: string;
}

function Navbar(props: NavbarProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <header className={cls.navbar}>
      <div className={cls.logo} >
      <Logo/>
      </div>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/menu"}>
          {t("Меню")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/blog"}>
          {t("Блог")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/pricing"}>
          {t("Ценообразование")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/contact"}>
          {t("Контакты")}
        </AppLink>
      </div>
      <div className={classNames(cls.auth, {}, [])}>
        <LangSwitcher />
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          {t("Авторизация")}
        </AppLink>
        <AppLink className="pd" to={"/"}>
          {t("Регистрация")}
        </AppLink>
      </div>
    </header>
  );
}

export default Navbar;
