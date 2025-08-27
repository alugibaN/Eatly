import React from "react";
import cls from "./GetForm.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Button, {ButtonType} from "shared/ui/button/Button";

interface GetFormProps {
  className?: string;
}

const GetForm = (props: GetFormProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.GetForm, {}, [className])}>
      <h3 className={cls.form__title}>GET 50%</h3>
        <form className={cls.form}>
          <fieldset className={cls.form__fildset}>
            <input className={cls.form__input} type="email"/>
            <Button type={ButtonType.PRIMARY} className={cls.form__button}>SUBSCRIBE</Button>
          </fieldset>
        </form>
    </div>
  );
};

export default GetForm;
