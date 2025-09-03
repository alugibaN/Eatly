import cls from "./popupOwerlay.module.scss"
import { classNames } from "shared/utils/classNames/ClassNames"

 interface popupOwerlayProps {
 className?: string
}

const popupOwerlay = (props: popupOwerlayProps) => {
  const {className, } = props 
  return (
     <div className={classNames(cls.popupOwerlay, {}, [className])}>
      
    </div>
  )
};

export default popupOwerlay;
