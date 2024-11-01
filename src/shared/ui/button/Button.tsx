import { classNames } from "shared/lib/classNames/ClassNames";
import cls from "./Button.module.scss";
import React, { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button type={"button"} className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
