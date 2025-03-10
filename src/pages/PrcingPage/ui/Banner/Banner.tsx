import React from "react";
import cls from "./Banner.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Pricing from "shared/assets/icons/Pricing.jpg";
import Pring from "shared/assets/icons/VectorPricing.svg"

 interface BannerProps {
 className?: string
}

const Banner = (props: BannerProps) => {
  const {className} = props 
  return (
     <div className={classNames(cls.Banner, {}, [className])}>
      <div className={cls.Banner__rectangle}>
        <h2 className={cls.Banner__title}>Our Pricing</h2>
        <Pring/>
        <img className={cls.Banner__img} src={Pricing} alt="" />
     </div>
    </div>
  )
};

export default Banner;
