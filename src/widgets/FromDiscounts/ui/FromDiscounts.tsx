import cls from "./FromDiscounts.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
// import Food from "shared/assets/icons/FoodSalat.png";
import GetForm from "./GetForm/GetForm";
import Discounts from "./Discounts/Discounts";
import Mask from "shared/assets/icons/MaskGroup.svg"

export enum FromDiscountsSize {
  M = "sizeM",
  L = "sizeL",
}

interface FromDiscountsProps {
  className?: string;
  isInput?: boolean;
  size?: FromDiscountsSize;
}

const FromDiscounts = (props: FromDiscountsProps) => {
  const { isInput = true, size = FromDiscountsSize.L } = props;
  return (
    <div className={classNames(cls.fromDiscounts, {}, [cls[size],])}>
      {/* <Mask className={cls.mask}/> */}
      {isInput ? <GetForm /> : <Discounts />}
       {isInput ? <img className={cls.food} src={""} alt="food" /> : null}
    </div>
  );
};

export default FromDiscounts;
