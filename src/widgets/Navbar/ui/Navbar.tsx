import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import useSizeWindow from "shared/utils/hooks/useSizeWindow/useSizeWindow";
import { useState } from "react";
import { UiIcons } from "shared/assets/icons/UIIcons";
import Button from "shared/ui/button/Button";
import { classNames } from "shared/utils/classNames/ClassNames";
import PopupNavbar from "./pop-up/PopupNavbar";

interface NavbarProps {
  className?: string;
}

function Navbar(props: NavbarProps) {
  const { t } = useTranslation();
  const { windowWidth } = useSizeWindow();
  const [open, setOpen] = useState(false);

  const mods: Record<string, boolean> = {
    [cls.open]: open,
  };

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {windowWidth > 980 ? (
      <header className={cls.navbar}>
        <div className={cls.navbar__container}>
          <AppLink
            to={"/"}
            type={AppLinkType.SECONDARY}
            className={cls.navbar__logo}
          >
            <UiIcons.logo />
          </AppLink>
          <div className={cls.navbar__links}>
            <AppLink
              size={AppLinkSize.SMALL}
              type={AppLinkType.SECONDARY}
              to={"/menu"}
            >
              {t("Меню")}
            </AppLink>
            <AppLink
              size={AppLinkSize.SMALL}
              type={AppLinkType.SECONDARY}
              to={"/blog"}
            >
              {t("Блог")}
            </AppLink>
            <AppLink
              size={AppLinkSize.SMALL}
              type={AppLinkType.SECONDARY}
              to={"/pricing"}
            >
              {t("Ценообразование")}
            </AppLink>
            <AppLink
              size={AppLinkSize.SMALL}
              type={AppLinkType.SECONDARY}
              to={"/contact"}
            >
              {t("Контакты")}
            </AppLink>
          </div>
          <div className={cls.navbar__auth}>
            <Button >
              <UiIcons.global />
            </Button>
            <AppLink size={AppLinkSize.LARGE} className="pd" to={"/login"}>
              {t("Вход")}
            </AppLink>
          </div>
        </div>
      </header>
      ) : (
       <header className={cls.navbar}>
          <div className={cls.navbar__container}>
            <AppLink
              to={"/"}
              type={AppLinkType.SECONDARY}
              className={cls.navbar__logo}
            >
              <UiIcons.logo />
            </AppLink>
            <button
              onClick={openMenu}
              className={classNames(`${cls.navbar__menu}`, mods, [])}
            >
              <UiIcons.menu/>
            </button>
          </div>
          <PopupNavbar open={open} />
        </header> 
      )}
    </>
  );
}

export default Navbar;
