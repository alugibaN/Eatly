import { classNames } from "../../lib/classNames/ClassNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, SyntheticEvent } from "react";

export enum ButtonType {
  PRIMARY =   "primary",
  SECONDARY = "secondary",
}
export enum ButtonSize {
  SMALL =   "small",
  MEDIUM =  "medium",
  LARGE =   "large",
}

interface ButtonProps
  extends React.PropsWithChildren<
    Omit<React.HTMLProps<HTMLButtonElement>, "type" | "size">
  > {
  className?: string;
  square?:    boolean;
  border?:     boolean;
  size?:      ButtonSize;
  type?:      ButtonType;
  onClick?:    () => void | ((e: SyntheticEvent) => void);
  htmlType?:   "button" | "submit" | "reset"
}

const Button: FC<ButtonProps> = (props) => {
  const { className, type, border, children, square, size, htmlType = "button", ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.border]: border,
  };
  return (
    <button
      type={htmlType}
      className={classNames(cls.button, mods, [className, cls[type], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

//  ButtonHTMLAttributes<HTMLButtonElement | SVGAElement>
  // OUTLINE = "outline",
  // BACGROUND_INVERTED = "bacgroundInverted",
  // BORDER = "border",
  // BACKGROUND = "background",