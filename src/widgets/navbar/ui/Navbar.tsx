import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Logo from "shared/assets/icons/logo.svg";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkSize, AppLinkTheme } from "shared/ui/appLink/AppLink";
import LangSwitcher from "widgets/LangSwwitcher/LangSwitcher";
import { Sidebar } from "widgets/Sidebar";
import useSizeWindow from "shared/lib/hooks/useSizeWindow/useSizeWindow";

interface NavbarProps {
  className?: string;
}

function Navbar(props: NavbarProps) {
  const { className } = props;
  const { t } = useTranslation();
  const {windowWidth} = useSizeWindow()

  return (
    <header className={cls.navbar}>
      <div className={cls.logo}>
        <Logo />
      </div>
      {windowWidth > 970 
      ? <>
      <div className={cls.links}>
        <AppLink size={AppLinkSize.size_null} theme={AppLinkTheme.SECONDARY} to={"/menu"}>
          {t("Меню")}
        </AppLink>
        <AppLink size={AppLinkSize.size_null} theme={AppLinkTheme.SECONDARY} to={"/blog"}>
          {t("Блог")}
        </AppLink>
        <AppLink size={AppLinkSize.size_null} theme={AppLinkTheme.SECONDARY} to={"/pricing"}>
          {t("Ценообразование")}
        </AppLink>
        <AppLink size={AppLinkSize.size_null} theme={AppLinkTheme.SECONDARY} to={"/contact"}>
          {t("Контакты")}
        </AppLink>
      </div>
      <div className={classNames(cls.auth, {}, [])}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/login"}>
          {t("Авторизация")}
        </AppLink>
        <AppLink className="pd" to={"/auth"}>
          {t("Регистрация")}
        </AppLink>
      </div> 
      </>
      : 
      <Sidebar/>
      }
    </header>
  );
}

export default Navbar;
        {/* <LangSwitcher />  */}
