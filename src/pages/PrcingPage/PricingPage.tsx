import React from "react"
import cls from "./PricingPage.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import Banner from "./ui/Banner/Banner";
import Affordable from "./ui/Banner/Affordable/Affordable";
import Dashboard from "widgets/Dashboard/ui/Dashboard";
import Comments from "widgets/Сomments/ui/Comments";

 interface PricingPageProps {
 className?: string
}

const PricingPage = (props: PricingPageProps) => {
  const {className} = props 
  return (
     <main className={classNames(cls.PricingPage, {}, [className])}>
      <Banner/>
      <Affordable/>
      <Dashboard/>
      {/* <Comments/> */}
    </main>
  )
};

export default PricingPage;
