import React, { useState } from "react"
import cls from "./AuthForm.module.scss"
import Button, { ButtonSize, ButtonType } from "shared/ui/button/Button";
import Apple from "shared/assets/icons/Apple.svg";
import G from "shared/assets/icons/G.svg";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
 interface AuthFormProps {
 className?: string
}

const AuthForm = (props: AuthFormProps) => {
  const {className} = props 
  
  const [form, setForm] = useState({name:"", email: "", password: ""})

  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

const handleSambit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}


  return (
      <form className={cls.auth__form} action="" onSubmit={handleSambit}>
        <h1 className={cls.auth__title}>Sign Up To eatly</h1>
        <div className={cls.auth__buttons}>
        <Button size={ButtonSize.MEDIUM} htmlType="button" type={ButtonType.SECONDARY}>
          <G  className={cls.auth__apple}/>
        </Button>
        <Button size={ButtonSize.MEDIUM} htmlType="button" type={ButtonType.SECONDARY} >
          <Apple   className={cls.auth__G}/>
        </Button>
        </div>
        <span className={cls.auth__or}>OR</span>

        <fieldset className={cls.auth__user}>
          <input placeholder="FULL NAME" className={cls.auth__user_name} name="name" type="text"  onChange={changeInput}/>
          <input placeholder="EMAIL" className={cls.auth__user_email} name="email" type="email" onChange={changeInput}/>
          <input placeholder="PASSWORD" className={cls.auth__user_password} name="password" type="password" onChange={changeInput}/>
          <Button className={cls.auth__user_button} type={ButtonType.PRIMARY} htmlType="button">SIGN UP</Button>
          <span className={cls.auth__user_text}>
            Already Have An Account? 
            <AppLink className={cls.auth_user_text_logIn} type={AppLinkType.PRIMARY} to={'/login'}>Log in</AppLink>
          </span>
        </fieldset>
        <span className={cls.auth__privat}>Privacy Policy</span>
        <span className={cls.auth__copyright}>Copyright 2022</span>
      </form>
  )
};

export default AuthForm;
