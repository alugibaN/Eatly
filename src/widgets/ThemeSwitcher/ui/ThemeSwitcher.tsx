import { useTheme } from "app/providers/themeProvaider";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { Theme } from "app/providers/themeProvaider/index";
import Button, { ButtonType } from "shared/ui/button/Button";


interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({className}:ThemeSwitcherProps) {
    const { ChangeThem, theme } = useTheme();

    return (
        <Button
            className={classNames( cls.ThemeSwitcher, {}, [className])}
            type={ButtonType.SECONDARY}
            onClick={ChangeThem}
        >
            {theme === Theme.DARK?<DarkIcon/>: <LightIcon/>}
        </Button> 
        
    )
}

export default ThemeSwitcher
