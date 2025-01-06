import React from "react"
import cls from "./PricingPage.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"

 interface PricingPageProps {
 className?: string
}

const PricingPage = (props: PricingPageProps) => {
  const {className} = props 
  return (
     <section className={classNames(cls.PricingPage, {}, [className])}>
      
    </section>
  )
};

export default PricingPage;
