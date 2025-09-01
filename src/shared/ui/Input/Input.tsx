import React, { useMemo } from "react";
import cls from "./Input.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
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
    [cls.error]: error,
  };

  const validationError = useMemo(
    () =>
      error &&
      errorText && (
        <p className={classNames(cls.input__error_text, {}, [])}>{errorText}</p>
      ),
    [error, error, size]
  );

  return (
    <div className={classNames(cls.input__container, {}, [className])}>
      <div className={classNames(cls.input, mods, [])}>
        <label className={cls.label}>{placeholder}</label>
        <input className={cls.text} type={type} />
      </div>
      {validationError}
    </div>
  );
};

export default Input;
