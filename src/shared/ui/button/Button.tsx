import { classNames } from "../../lib/classNames/ClassNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = "clear",
  OUTLINE = "outline",
  BACGROUND_INVERTED = "bacgroundInverted",
  BORDER = "border",
  BACKGROUND = "background",
}
export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement| SVGAElement> {
  className?: string;
  theme?: ButtonTheme
  square?:boolean;
  size?: ButtonSize;
}


const Button: FC<ButtonProps> = (props) => {
    const { 
      className, 
      children, 
      theme, 
      square, 
      size, 
      ...otherProps 
    } = props;

    const mods: Record<string, boolean> = {
      [cls[theme]]:true,
      [cls.square]: square,
      [cls[size]]: true 
    }
    return (
        <button type={"button"} className={classNames(cls.button, mods, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
