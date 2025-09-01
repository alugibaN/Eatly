import React from "react"
import cls from "./DashboardPage.module.scss"
import { classNames } from "shared/utils/classNames/ClassNames"

 interface DashboardPageProps {
 className?: string
}

const DashboardPage = (props: DashboardPageProps) => {
  const {className} = props 
  return (
     <div className={classNames(cls.DashboardPage, {}, [className])}>
      
    </div>
  )
};

export default DashboardPage;
