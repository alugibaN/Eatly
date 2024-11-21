import React from "react"
import { classNames } from "shared/lib/classNames/ClassNames"
import cls from "./AppLink.module.scss"
import { Link, LinkProps } from "react-router-dom"
import { FC } from "react"

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  BORDER_PRIMARY = 'border_primary'
}

interface AppLinkProps extends LinkProps {
  className?:string,
  theme?: AppLinkTheme,
}

const  AppLink: FC <AppLinkProps> = (props:AppLinkProps)=> {
    const {
        to, 
        className, 
        children, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps
    } = props
    return (
        <Link 
            to={to} 
            className={classNames(cls.app__link, {}, [className, cls[theme]])} 
            {...otherProps}
        >
            {children}
        </Link>
    )
}

export default AppLink
