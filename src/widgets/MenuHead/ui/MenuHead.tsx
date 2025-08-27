import React from "react"
import cls from "./MenuHead.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import FromDiscounts, { FromDiscountsSize } from "widgets/FromDiscounts/ui/FromDiscounts";
import Input from "widgets/FromDiscounts/ui/Input/Input";
import Button, { ButtonType } from "shared/ui/button/Button";
import CategoryFilter from "widgets/CategoryFilter/ui/CategoryFilter";

 interface MenuHeadProps {
 className?: string
}

const MenuHead = (props: MenuHeadProps) => {
  const {className} = props 
  return (
     <section className={classNames(cls.MenuHead, {}, [className])}>
        <FromDiscounts isInput={false} size={FromDiscountsSize.M}/>
         <Input/>
        <div className={cls.buttons}>
        <Button  type={ButtonType.SECONDARY} border={true} className={cls.button__left}>Food</Button>
        <Button type={ButtonType.PRIMARY} className={cls.button__right}>Resturent</Button>
        </div>
        <CategoryFilter/>
    </section>
  )
};

export default MenuHead;
