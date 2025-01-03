import React from "react"
import cls from "./MenuPage.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import MenuHead from "widgets/MenuHead/ui/MenuHead";

 interface MenuPageProps {
 className?: string
}

const MenuPage = (props: MenuPageProps) => {
  const {className} = props 
  return (
    <MenuHead/>
  )
};

export default MenuPage;
