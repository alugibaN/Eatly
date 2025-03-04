import React from "react";
import { classNames } from "shared/lib/classNames/ClassNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/index";
import LangSwitcher from "widgets/LangSwwitcher/LangSwitcher";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/button/Button";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import { spawn } from "child_process";
import Menu from "shared/assets/icons/menu.svg";
import Clouse from "shared/assets/icons/clouse.svg"

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
            data-testid = "sidebar" 
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className,])}
        >
        <Button 
            theme={ButtonTheme.CLEAR} 
            className={cls.navicon}
            onClick={onToggle}
        >
            {collapsed ? <Clouse/> : <Menu/>}
        </Button>
        
        
        
        </div>
    );
};
        // <div 
        //     data-testid = "sidebar" 
        //     className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className,])}
        // >
            {/* <div className={cls.items}>
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
            </div> */}
        // </div>