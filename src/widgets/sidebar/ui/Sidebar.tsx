import React, { useState } from "react";
import { classNames } from "shared/utils/classNames/ClassNames";
import cls from "./Sidebar.module.scss";
import Button, { ButtonSize, ButtonType } from "shared/ui/button/Button";
import Logo from "shared/assets/img/logo.svg";
import LogoMin from "shared/assets/img/LogoMin.svg";
import AppLink from "shared/ui/appLink/AppLink";
import Order from "shared/assets/img/OrdersIcon.svg";
import Home from "shared/assets/img/HomeIcon.svg";
import Messages from "shared/assets/img/MessagesIcon.svg";

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
        // type={AppLinkTheme}
      >
        <Home className={cls.home} />
        {!collapsed ? <p className={cls.sidbar__text}>Dashboard</p> : null}
      </AppLink>
      <AppLink
        to={"/"}
        className={cls.sidebar__item}
      >
        <Order className={cls.order} />
        {!collapsed ? <p className={cls.sidbar__text}>Orders</p> : null}
      </AppLink>
      <AppLink
        to={"/"}
        className={cls.sidebar__item}
      >
        <Messages className={cls.messages} />
        {!collapsed ? <p className={cls.sidbar__text}>Messages</p> : null}
      </AppLink>
      <AppLink
        to={"/"}
        className={cls.sidebar__item}
      >

        {!collapsed ? <p className={cls.sidbar__text}>My Wallets</p> : null}
      </AppLink>
      <Button
        onClick={onToggle}
        className={cls.collapseBtn}
        type={ButtonType.SECONDARY}
        square
        size={ButtonSize.MEDIUM}
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
