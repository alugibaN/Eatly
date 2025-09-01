import React from "react";
import { classNames } from "shared/utils/classNames/ClassNames";
import cls from "./AppLink.module.scss";
import { LinkProps, NavLink } from "react-router-dom";
import { FC } from "react";
 

export enum AppLinkType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum AppLinkSize {

  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  type?: AppLinkType;
  size?: AppLinkSize;
  border?: boolean;
}

const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    type = AppLinkType.PRIMARY,
    size = AppLinkSize.LARGE,
    border = false,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.border]: border,
  };

  return (
    <NavLink
      to={to}
      className={classNames(cls.app__link, mods, [
        className,
        cls[size],
        cls[type],
      ])}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};

export default AppLink;
