import React from "react";
import { classNames } from "shared/lib/classNames/ClassNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/index";
import LangSwitcher from "widgets/LangSwwitcher/LangSwitcher";

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
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
