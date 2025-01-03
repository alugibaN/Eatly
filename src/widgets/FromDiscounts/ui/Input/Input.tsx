import React from "react";
import cls from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Search from "shared/assets/icons/Search.svg"

 interface InputProps {
 className?: string
}

const Input = (props: InputProps) => {
  const {className} = props 
  return (
    <form className={classNames(cls.form, {}, [])} action="">
      <Search/>
        <input placeholder="Search"  className={cls.input} type="text" >
        </input>
    </form>
  )
};

export default Input;
