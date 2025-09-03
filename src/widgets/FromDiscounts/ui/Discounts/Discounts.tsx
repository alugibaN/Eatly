import cls from "./Discounts.module.scss"
import { classNames } from "shared/utils/classNames/ClassNames"

 interface DiscountsProps {
 className?: string
}

const Discounts = (props: DiscountsProps) => {
  const {className} = props 
  return (
     <div className={classNames(cls.Discounts, {}, [className])}>
      <h3 className={cls.title}>50% OFF</h3>
      <p className={cls.subtitle}>WEEKEND</p>
      <img className={cls.food} src={"Food"} alt="Food" />
    </div>
  )
};

export default Discounts;
