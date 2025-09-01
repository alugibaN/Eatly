import React, { SyntheticEvent, useState } from "react"
import cls from "./MenuHead.module.scss"
import { classNames } from "shared/utils/classNames/ClassNames"
import FromDiscounts, { FromDiscountsSize } from "widgets/FromDiscounts/ui/FromDiscounts";
import Input from "shared/ui/Input/Input";
import Button, { ButtonType } from "shared/ui/button/Button";
import CategoryFilter from "widgets/CategoryFilter/ui/CategoryFilter";

 interface MenuHeadProps {
 className?: string
}

const MenuHead = (props: MenuHeadProps) => {
  const {className} = props 
  const [value, setValue] = useState('')
  
  
  const onChange = (e: React.ChangeEvent<HTMLFormElement>) =>  {
    setValue(e.target.value)
}  
  
  return (
     <section className={classNames(cls.MenuHead, {}, [className])}>
        <FromDiscounts isInput={false} size={FromDiscountsSize.M}/>
         <Input 
          value={value}
          size="medium"  
          type="text" 
          onChange={onChange}
          />
        <div className={cls.buttons}>
        <Button  type={ButtonType.SECONDARY} border={true} className={cls.button__left}>Food</Button>
        <Button type={ButtonType.PRIMARY} className={cls.button__right}>Restaurant</Button>
        </div>
        <CategoryFilter/>
    </section>
  )
};

export default MenuHead;
