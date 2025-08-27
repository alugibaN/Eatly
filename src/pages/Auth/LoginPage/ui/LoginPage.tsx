import React, { useState } from "react"
import cls from "./LoginPage.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import Logo from "shared/assets/icons/LogoMin.svg";
import Button, { ButtonSize, ButtonType } from "shared/ui/button/Button";
import Apple from "shared/assets/icons/Apple.svg";
import G from "shared/assets/icons/G.svg";
import AppLink, { AppLinkType } from "shared/ui/appLink/AppLink";
import BannerAuth from "widgets/Banner/ui/BannerAuth/BannerAuth";
 interface LoginPageProps {
 className?: string
}

const LoginPage = (props: LoginPageProps) => {
  const {className} = props;
  const [form, setForm] = useState({name: "", email: "", password: ""});

const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
   setForm({...form, [e.target.name]: e.target.value })
}

const handleSambit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

}

  return (
    <section className={classNames(cls.AuthPage, {}, [className])}>
      <AppLink type={AppLinkType.PRIMARY} className={cls.logo} to={'/'}> <Logo /> </AppLink>
      <form className={cls.auth__form} action="" onSubmit={handleSambit}>
      <h1 className={cls.auth__title}>Sign In To eatly</h1>
      <div className={cls.auth__buttons}>
      <Button size={ButtonSize.MEDIUM} type={ButtonType.SECONDARY}>
        <G  className={cls.auth__apple}/>
      </Button>
      <Button size={ButtonSize.MEDIUM} type={ButtonType.SECONDARY} >
        <Apple   className={cls.auth__G}/>
      </Button>
      </div>
      <span className={cls.auth__or}>OR</span>

      <fieldset className={cls.auth__user}>
        <input placeholder="EMAIL" className={cls.auth__user_email} type="email"  onChange={changeInput}/>
        <input placeholder="PASSWORD" className={cls.auth__user_password} type="password"  onChange={changeInput}/>
        <AppLink className={cls.auth__user_forget} type={AppLinkType.PRIMARY} to={'/forgot-password'}>Forget Password?</AppLink>
        <Button className={cls.auth__user_button} type={ButtonType.PRIMARY}>SIGN IN</Button>
        <span className={cls.auth__user_text}>
          Create A New Account? 
          <AppLink className={cls.auth_user_text_logIn}  type={AppLinkType.PRIMARY} to={'/auth'}> Sign Up</AppLink>
        </span>
      </fieldset>
      <span className={cls.auth__privat}>Privacy Policy</span>
      <span className={cls.auth__copyright}>Copyright 2022</span>
    </form>
    <BannerAuth/>
  </section>
  )
};

export default LoginPage;
