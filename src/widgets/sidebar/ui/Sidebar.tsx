import React from "react";
import { classNames } from "shared/lib/classNames/ClassNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/button/Button";
import Logo from "shared/assets/icons/logo.svg";
import LogoMin from "shared/assets/icons/LogoMin.svg";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import Order from "shared/assets/icons/OrdersIcon.svg";
import Home from "shared/assets/icons/HomeIcon.svg";
import Messages from "shared/assets/icons/MessagesIcon.svg";
import Wallet from "shared/assets/icons/WalletIcon.svg";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setColapsed] = useState(false);

  const onToggle = () => {
    setColapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      {!collapsed ? <Logo className={cls.navbar__title} /> : <LogoMin />}
      <AppLink
        to={"/"}
        className={cls.sidebar__item}
        theme={AppLinkTheme.WITHOUT_STYLES}
      >
        <Home className={cls.home} />
        {!collapsed ? <p className={cls.sidbar__text}>Dashboard</p> : null}
      </AppLink>
      <AppLink
        to={"/"}
        className={cls.sidebar__item}
        theme={AppLinkTheme.WITHOUT_STYLES}
      >
        <Order className={cls.order} />
        {!collapsed ? <p className={cls.sidbar__text}>Orders</p> : null}
      </AppLink>
      <AppLink
        to={"/"}
        className={cls.sidebar__item}
        theme={AppLinkTheme.WITHOUT_STYLES}
      >
        <Messages className={cls.messages} />
        {!collapsed ? <p className={cls.sidbar__text}>Messages</p> : null}
      </AppLink>
      <AppLink
        to={"/"}
        className={cls.sidebar__item}
        theme={AppLinkTheme.WITHOUT_STYLES}
      >
        <Wallet className={cls.wallet} />
        {!collapsed ? <p className={cls.sidbar__text}>My Wallets</p> : null}
      </AppLink>
      <Button
        type="button"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
};

{
  /* <Button 
            theme={ButtonTheme.CLEAR} 
            className={cls.navicon}
            onClick={onToggle}
        >
            {collapsed ? <Clouse/> : <Menu/>}
        </Button>
         */
}
// <div
//     data-testid = "sidebar"
//     className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className,])}
// >
{
  /* <div className={cls.items}>
            <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                    className={cls.main_link}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/about"}
                    className={cls.main_link}
                >
                    О сайте
                </AppLink>
            </div>
            <Button 
                type="button" 
                onClick={onToggle} 
                className={cls.collapseBtn} 
                theme={ButtonTheme.BACGROUND_INVERTED} 
                square
                size={ButtonSize.L}
            > 
                {collapsed? ">": "<"}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div> */
}
// </div>
