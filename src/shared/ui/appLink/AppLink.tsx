import React from "react";
import { classNames } from "shared/lib/classNames/ClassNames";
import cls from "./AppLink.module.scss";
import { LinkProps, NavLink } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  BORDER_PRIMARY = "border_primary",
  WITHOUT_STYLES = "without__styles",

  NONE_BG = "none_bg",
  VIEW_ALL = "view_all",
}

export enum AppLinkSize {
  size_null = "size_null",
  sizeM = "size_m",
  sizeL = "size_l",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  size?: AppLinkSize;
}

const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    size = AppLinkSize.sizeL,
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={classNames(cls.app__link, {}, [
        className,
        cls[size],
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};

export default AppLink;
