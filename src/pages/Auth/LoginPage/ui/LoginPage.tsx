import React, { useState } from "react"
import cls from "./LoginPage.module.scss"
import { classNames } from "shared/utils/classNames/ClassNames"
import Logo from "shared/assets/img/LogoMin.svg";
import Button, { ButtonSize, ButtonType } from "shared/ui/button/Button";
import Apple from "shared/assets/img/Apple.svg";
import G from "shared/assets/img/G.svg";
import AppLink, { AppLinkType } from "shared/ui/appLink/AppLink";
import BannerAuth from "widgets/Banner/ui/BannerAuth/BannerAuth";
import SocialMediaIcons from "shared/assets/icons/SocialMediaIcons";


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
  console.log(SocialMediaIcons);
  return (
    <section className={classNames(cls.AuthPage, {}, [className])}>
      <AppLink type={AppLinkType.SECONDARY} className={cls.logo} to={'/'}> <Logo /> </AppLink>
      <form className={cls.auth__form} action="" onSubmit={handleSambit}>
      <h1 className={cls.auth__title}>Sign In To eatly</h1>
      <div className={cls.auth__buttons}>
      <Button size={ButtonSize.MEDIUM} type={ButtonType.SECONDARY}>
        <G  className={cls.auth__apple}/>
      </Button>
      <Button size={ButtonSize.MEDIUM} type={ButtonType.SECONDARY} >
        {/* <SocialMediaIcons.ap type={"secondary"} onClick={()=>{}} className={cls.auth__G}/> */}
      </Button>
      </div>
      <span className={cls.auth__or}>OR</span>

      <fieldset className={cls.auth__user}>
        <input placeholder="EMAIL" className={cls.auth__user_email} type="email"  onChange={changeInput}/>
        <input placeholder="PASSWORD" className={cls.auth__user_password} type="password"  onChange={changeInput}/>
        <AppLink className={cls.auth__user_forget} type={AppLinkType.SECONDARY} to={'/forgot-password'}>Forget Password?</AppLink>
        <Button className={cls.auth__user_button} type={ButtonType.PRIMARY}>SIGN IN</Button>
        <span className={cls.auth__user_text}>
          Create A New Account? 
          <AppLink className={cls.auth_user_text_logIn}  type={AppLinkType.SECONDARY} to={'/auth'}> Sign Up</AppLink>
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
