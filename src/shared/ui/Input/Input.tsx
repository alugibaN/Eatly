import React from "react";
import cls from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Search from "shared/assets/icons/Search.svg";

interface InputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  icon?: string;
  size?: "small" | "medium" | "large";
  type?: "text" | "email" | "passwoed";
  success?: boolean;
  disabled?: boolean;
  border?: boolean;
  onChange?(e: React.ChangeEvent<HTMLFormElement>): void;
  onIconClick?(e: React.MouseEvent<HTMLDivElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
}

const Input = (props: InputProps) => {
  const {
    className,
    value,
    placeholder,
    error,
    errorText,
    icon,
    size = "medium",
    type = "text",
    success = false,
    disabled = false,
    border = false,
    onChange,
    onIconClick,
    onBlur,
    onFocus,
  } = props;

  const mods: Record<string, boolean> = {
    [cls.border]: border,
  };

  return (
    <div className={classNames(cls.input__container, mods, [])}>
      <label className={cls.label}>{placeholder}</label>
      <input className={cls.input} type={type} />
    </div>
  );
};

export default Input;
