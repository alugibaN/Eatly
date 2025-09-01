import React from "react";
import cls from "./BannerAuth.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import Group from "shared/assets/img/GroupMenu.png";
import Vector from "shared/assets/img/Vectoron.svg";
import Vect from "shared/assets/img/Vectorjjj.svg";
import Gro from "shared/assets/img/Gro.svg";

 interface bannerAuthProps {
 className?: string
}

const BannerAuth = (props: bannerAuthProps) => {
  const {className} = props 
  return (
     <div className={classNames(cls.BannerAuth, {}, [className])}>
      <img className={cls.BannerAuth__img} src={Group} alt="" />
      <Vector className={cls.ve}/>
      <Vect className={cls.vect1}/>
      <Vect className={cls.vect2}/>
      <Vect className={cls.vect3}/>
      <Vect className={cls.vect4}/>
      <Gro className={cls.gro}/>
      <h2 className={cls.BannerAuth__title}>Find Foods With Love</h2>
      <p className={cls.BannerAuth__text}>
      Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes 
      Including Asian, Chinese, Italians And Many More. Our Dashboard Helps
      You To Manage Orders And Money.
      </p>
    </div>
  )
};

export default BannerAuth;
