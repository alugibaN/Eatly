import cls from "./FromDiscounts.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import Food from "shared/assets/icons/FoodSalat.png"
import Button from "shared/ui/button/Button";

 interface FromDiscountsProps {
 className?: string
}

const FromDiscounts = (props: FromDiscountsProps) => {
  const {className} = props 
  return (
    <div  className={classNames(cls.fromDiscounts, {}, [className])}>
      <h3 className={cls.form__title}>GET 50%</h3>
     <form className={cls.form}>
      <fieldset className={cls.form__fildset}>
        <input className={cls.form__input} type="email"/>
        <Button className={cls.form__button}>
          SUBSCRIBE
        </Button>
      </fieldset>
    </form>
    <img className={cls.food} src={Food} alt="food" />
    </div>
  )
};

export default FromDiscounts;
