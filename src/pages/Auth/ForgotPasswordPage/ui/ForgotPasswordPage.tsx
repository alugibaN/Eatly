import React from "react"
import cls from "./ForgotPasswordPage.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import Logo from "shared/assets/icons/LogoMin.svg";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/button/Button";
import Apple from "shared/assets/icons/Apple.svg";
import G from "shared/assets/icons/G.svg";
import AppLink, { AppLinkSize, AppLinkTheme } from "shared/ui/appLink/AppLink";
import BannerAuth from "widgets/Banner/ui/BannerAuth/BannerAuth";

 interface ForgotPasswordPageProps {
 className?: string
}

const ForgotPasswordPage = (props: ForgotPasswordPageProps) => {
  const {className} = props 
  return (
    <section className={classNames(cls.AuthPage, {}, [className])}>
      <AppLink theme={AppLinkTheme.NONE_BG} className={cls.logo} to={'/'}> <Logo /> </AppLink>
      <form className={cls.auth__form} action="">
      <h1 className={cls.auth__title}>Forget Password</h1>
      <span className={cls.auth__subtitle}>Enter Your Mail To Reset</span>
      <fieldset className={cls.auth__user}>
        <input placeholder="EMAIL" className={cls.auth__user_email} type="email" />
        <Button className={cls.auth__user_button} theme={ButtonTheme.PRIMARY}>SIGN UP</Button>
      </fieldset>
      <span className={cls.auth__privat}>Privacy Policy</span>
      <span className={cls.auth__copyright}>Copyright 2022</span>
    </form>
    <BannerAuth/>
  </section>
  )
};

export default ForgotPasswordPage;
