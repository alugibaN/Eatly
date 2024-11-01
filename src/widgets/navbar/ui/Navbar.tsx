import React from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";

interface NavbarProps {
  className?: string;
}

function Navbar(props: NavbarProps) {
    const { className } = props;

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
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
        </div>
    );
}

export default Navbar;
