import cls from "./Navbar.module.scss";
import Logo from "shared/assets/icons/logo.svg";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkSize, AppLinkTheme } from "shared/ui/appLink/AppLink";
import LangSwitcher from "widgets/LangSwwitcher/LangSwitcher";
import { Sidebar } from "widgets/Sidebar";
import useSizeWindow from "shared/lib/hooks/useSizeWindow/useSizeWindow";
import IconMenu from "shared/assets/icons/iconMenuNavbar.svg";
import PopupNavbar from "widgets/pop-up/navbar/PopupNavbar";
import { useState } from "react";
import { classNames } from "shared/lib/classNames/ClassNames";

interface NavbarProps {
  className?: string;
}

function Navbar(props: NavbarProps) {
  const { t } = useTranslation();
  const { windowWidth } = useSizeWindow();
  const [open, setOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false)

  const mods: Record<string, boolean> = {
    [cls.open]: open
  }

  const openMenu = () =>{
    setOpen(!open)
  }

    

  return (
    <>
      {windowWidth > 980 ? (
        <header className={cls.navbar}>
          <div className={cls.navbar__container}>
            <Logo className={cls.navbar__logo} />
            <div className={cls.navbar__links}>
              <AppLink
                size={AppLinkSize.size_null}
                theme={AppLinkTheme.SECONDARY}
                to={"/menu"}
              >
                {t("Меню")}
              </AppLink>
              <AppLink
                size={AppLinkSize.size_null}
                theme={AppLinkTheme.SECONDARY}
                to={"/blog"}
              >
                {t("Блог")}
              </AppLink>
              <AppLink
                size={AppLinkSize.size_null}
                theme={AppLinkTheme.SECONDARY}
                to={"/pricing"}
              >
                {t("Ценообразование")}
              </AppLink>
              <AppLink
                size={AppLinkSize.size_null}
                theme={AppLinkTheme.SECONDARY}
                to={"/contact"}
              >
                {t("Контакты")}
              </AppLink>
            </div>
            <div className={cls.navbar__auth}>
              <AppLink
                size={AppLinkSize.sizeM}
                theme={AppLinkTheme.SECONDARY}
                to={"/login"}
              >
                {t("Вход")}
              </AppLink>
              <AppLink size={AppLinkSize.sizeM} className="pd" to={"/auth"}>
                Присоеденится к Eatly
              </AppLink>
            </div>
          </div>
        </header>
      ) : (
        <header className={cls.navbar}>
          <div className={cls.navbar__container}>
            <Logo className={cls.navbar__logo} />
            <button onClick={openMenu}
            className={classNames( `${cls.navbar__menu}`,mods, [])}>
              <IconMenu className={cls.navbar__menu_icon} />
            </button>
          </div>
          <PopupNavbar open={open} />
        </header>
      )}
    </>
  );
}

export default Navbar;
