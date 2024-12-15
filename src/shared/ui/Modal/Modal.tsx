import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import cls from "./Modal.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"

 interface ModalProps {
 className?: string;
 children?: ReactNode;
 isOpen?: boolean;
 onClose?: ()=>void;
}


const ANIMATION_DELAY =300

const Modal = (props: ModalProps) => {
  const {className, children, isOpen, onClose} = props;
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>();  // ReturnType 

  const mods: Record<string, boolean> ={
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const clouseHeandler = () =>{
    if(onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(()=>{
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }

const onKeydown = useCallback((e: KeyboardEvent) =>{
  if(e.key === 'Escape'){
    clouseHeandler();
  }
},[clouseHeandler]);


useEffect(()=>{
    if(isOpen){
      window.addEventListener('keydown', onKeydown)
    }

  return ()=>{
    clearTimeout(timerRef.current)
    window.removeEventListener('keydown', onKeydown)
  }
},[isOpen])


  const onContentClick = (e: React.MouseEvent)=>{ 
    e.stopPropagation();
  }

  return (
     <div className={classNames(cls.Modal, {}, [className])}>
        <div className={cls.overlay} onClick={clouseHeandler}>
          <div className={cls.content} onClick={onContentClick}>
              {children}
          </div>
        </div>
    </div>
  )
};

export default Modal;
