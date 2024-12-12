import cls from "./FromDiscounts.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"

 interface FromDiscountsProps {
 className?: string
}

const FromDiscounts = (props: FromDiscountsProps) => {
  const {className} = props 
  return (
     <div className={classNames(cls.fromDiscounts, {}, [className])}>
      
    </div>
  )
};

export default FromDiscounts;
