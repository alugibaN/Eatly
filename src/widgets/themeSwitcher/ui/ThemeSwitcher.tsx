import React from "react";
import { useTheme } from "app/providers/themeProvaider";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { Theme } from "app/providers/themeProvaider/index";
import Button, { ThemeButton } from "shared/ui/button/Button";


interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({className}:ThemeSwitcherProps) {
    const { ChangeThem, theme } = useTheme();

    return (
        <Button
            type="button"
            className={classNames( cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={ChangeThem}
        >
            {theme === Theme.DARK?<DarkIcon/>: <LightIcon/>}
        </Button> 
        
    )
}

export default ThemeSwitcher
