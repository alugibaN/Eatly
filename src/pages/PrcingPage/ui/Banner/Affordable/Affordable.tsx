import React from "react";
import cls from "./Affordable.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Check from "shared/assets/icons/Check.svg";
import MarkCross from "shared/assets/icons/MarkCross.svg";

 interface AffordableProps {
 className?: string
}

const Affordable = (props: AffordableProps) => {
  const {className} = props 
  return (
     <section className={classNames(cls.affordable, {}, [className])}>


    <ul className={cls.affordable__category}>
      <li className={cls.affordable__category_item_pricing}>
        <h3 className={cls.affordable__category_title}>
          Pricing
        </h3>
        <p className={cls.affordable__category_subtitle}>
          Affordable Basic <br/>
          & Pro Plans
        </p>
      </li>
      <li className={cls.affordable__category_item_basic}>
        <h3 className={cls.affordable__category_title}>Basic</h3>
        <p className={cls.affordable__category_subtitle}> 
          Completely 100% <br/>
          Free Plan 
        </p>
      </li>
      <li className={cls.affordable__category_item_premium}>
        <h3 className={cls.affordable__category_title}>Premium</h3>
        <p className={cls.affordable__category_subtitle}>
          Amazing Premium <br/>
          Features Plan
        </p>
      </li>
    </ul>



    <ul className={cls.affordable__cost}>
      <li className={cls.affordable__cost_item_basic}>
        <span className={cls.affordable__cost_dolar}>$</span>
        <p className={cls.affordable__cost_price}>0</p>
        <span className={cls.affordable__cost_mounth}>/mounth</span>
      </li>
      <li className={cls.affordable__cost_item_premium}>
      <span className={cls.affordable__cost_dolar}>$</span>
      <p className={cls.affordable__cost_price}>5</p>
      <span className={cls.affordable__cost_mounth}>/mounth</span>
      </li>
    </ul>



    <ul className={cls.affordable__advantage}>
      <h3 className={cls.affordable__advantage_title}>Core features</h3>
      <li className={cls.affordable__advantage_item}>
        <h4 className={cls.affordable__advantage_item_title}>Support 24/7</h4>
        <Check className={cls.affordable__advantage_item_basic}/>
        <Check className={cls.affordable__advantage_item_premium}/>
      </li>
      <li className={cls.affordable__advantage_item}>
        <h4 className={cls.affordable__advantage_item_title}>Fast Delivery</h4>
        <Check className={cls.affordable__advantage_item_basic}/>
        <Check className={cls.affordable__advantage_item_premium}/>
      </li>
      <li className={cls.affordable__advantage_item}>
        <h4 className={cls.affordable__advantage_item_title}>20% Off Food Deals</h4>
        <Check className={cls.affordable__advantage_item_basic}/>
        <Check className={cls.affordable__advantage_item_premium}/>
      </li>
      <li className={cls.affordable__advantage_item}>
        <h4 className={cls.affordable__advantage_item_title}>Transaction History</h4>
        <Check className={cls.affordable__advantage_item_basic}/>
        <Check className={cls.affordable__advantage_item_premium}/>
      </li>
      <li className={cls.affordable__advantage_item}>
        <h4 className={cls.affordable__advantage_item_title}>Weekend Deals</h4>
        <Check className={cls.affordable__advantage_item_basic}/>
        <MarkCross className={cls.affordable__advantage_item_premium}/>
      </li>
      <li className={cls.affordable__advantage_item}>
        <h4 className={cls.affordable__advantage_item_title}>Dashboard Access</h4>
        <Check className={cls.affordable__advantage_item_basic}/>
        <MarkCross className={cls.affordable__advantage_item_premium}/>
      </li>
      <li className={cls.affordable__advantage_item}>
        <h4 className={cls.affordable__advantage_item_title}>Premium Group Access</h4>
        <Check className={cls.affordable__advantage_item_basic}/>
        <MarkCross className={cls.affordable__advantage_item_premium}/>
      </li>
    </ul>



    </section>
  )
};

export default Affordable;
