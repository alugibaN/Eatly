import React from "react";
import cls from "./AuthPage.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Logo from "shared/assets/icons/LogoMin.svg";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/button/Button";
import Apple from "shared/assets/icons/Apple.svg";
import G from "shared/assets/icons/G.svg";
import AppLink, { AppLinkSize, AppLinkTheme } from "shared/ui/appLink/AppLink";
import BannerAuth from "widgets/Banner/ui/BannerAuth/BannerAuth";

interface AuthPageProps {
  className?: string;
}

const AuthPage = (props: AuthPageProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.AuthPage, {}, [className])}>
      <AppLink theme={AppLinkTheme.NONE_BG} className={cls.logo} to={'/'}> <Logo /> </AppLink>
      <form className={cls.auth__form} action="">
        <h1 className={cls.auth__title}>Sign Up To eatly</h1>
        <div className={cls.auth__buttons}>
        <Button size={ButtonSize.L} theme={ButtonTheme.CLEAR}>
          <G  className={cls.auth__apple}/>
        </Button>
        <Button size={ButtonSize.L} theme={ButtonTheme.CLEAR} >
          <Apple   className={cls.auth__G}/>
        </Button>
        </div>
        <span className={cls.auth__or}>OR</span>

        <fieldset className={cls.auth__user}>
          <input placeholder="FULL NAME" className={cls.auth__user_name} type="text" />
          <input placeholder="EMAIL" className={cls.auth__user_email} type="email" />
          <input placeholder="PASSWORD" className={cls.auth__user_password} type="password" />
          <Button className={cls.auth__user_button} theme={ButtonTheme.PRIMARY}>SIGN UP</Button>
          <span className={cls.auth__user_text}>
            Already Have An Account? 
            <AppLink className={cls.auth_user_text_logIn}  theme={AppLinkTheme.NONE_BG} to={'/login'}>Log in</AppLink>
          </span>
        </fieldset>
        <span className={cls.auth__privat}>Privacy Policy</span>
        <span className={cls.auth__copyright}>Copyright 2022</span>
      </form>
      <BannerAuth/>
    </section>
  );
};

export default AuthPage;
