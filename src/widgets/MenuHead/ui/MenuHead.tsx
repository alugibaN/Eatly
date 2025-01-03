import React from "react"
import cls from "./MenuHead.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import FromDiscounts, { FromDiscountsSize } from "widgets/FromDiscounts/ui/FromDiscounts";
import Input from "widgets/FromDiscounts/ui/Input/Input";
import Button from "shared/ui/button/Button";

 interface MenuHeadProps {
 className?: string
}

const MenuHead = (props: MenuHeadProps) => {
  const {className} = props 
  return (
     <section className={classNames(cls.MenuHead, {}, [className])}>
        <FromDiscounts isInput={false} size={FromDiscountsSize.M}/>
        <Input/>
        <Button/>  
        <Button/>
    </section>
  )
};

export default MenuHead;
