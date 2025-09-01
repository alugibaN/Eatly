import React from "react";
import cls from "./PopupNavbar.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import { useTranslation } from "react-i18next";

interface PopupNavbarProps {
  className?: string;
  open: boolean;
}

const PopupNavbar = (props: PopupNavbarProps) => {
  const { t } = useTranslation();
  const { className, open} = props;

  const mods: Record<string, boolean> = {
    [cls.open]: open,
  }


  return (
    <nav className={classNames(cls.popup, mods, [className])}>
      <div className={cls.popup__owerlay}>
      <ul className={cls.popup__links}>
        <li className={cls.popup__link}>
          <AppLink
            size={AppLinkSize.SMALL}
            type={AppLinkType.SECONDARY}
            to={"/menu"}
          >
            {t("Меню")}
          </AppLink>
        </li>
        <li className={cls.popup__link}>
          <AppLink
            size={AppLinkSize.SMALL}
            type={AppLinkType.SECONDARY}
            to={"/blog"}
          >
            {t("Блог")}
          </AppLink>
        </li>
        <li className={cls.popup__link}>
          <AppLink
            size={AppLinkSize.SMALL}
            type={AppLinkType.SECONDARY}
            to={"/pricing"}
          >
            {t("Ценообразование")}
          </AppLink>
        </li>
        <li className={cls.popup__link}>
          <AppLink
            size={AppLinkSize.SMALL}
            type={AppLinkType.SECONDARY}
            to={"/contact"}
          >
            {t("Контакты")}
          </AppLink>
        </li>
      </ul>
      <ul className={cls.popup__links}>
        <li className={cls.popup__link}>
          <AppLink
            size={AppLinkSize.SMALL}
            type={AppLinkType.SECONDARY}
            to={"/login"}
          >
            {t("Вход")}
          </AppLink>
        </li>
        <li className={cls.popup__link}>
          <AppLink size={AppLinkSize.SMALL} className="pd" to={"/auth"}>
            Присоеденится к Eatly
          </AppLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default PopupNavbar;
