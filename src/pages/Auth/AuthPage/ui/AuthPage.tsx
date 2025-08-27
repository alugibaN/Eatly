import React, { useState } from "react";
import cls from "./AuthPage.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Logo from "shared/assets/icons/LogoMin.svg";
import AppLink, { AppLinkType } from "shared/ui/appLink/AppLink";
import BannerAuth from "widgets/Banner/ui/BannerAuth/BannerAuth";
import AuthForm from "entities/Auth/ui/AuthForm";

interface AuthPageProps {
  className?: string;
}

const AuthPage = (props: AuthPageProps) => {
  const { className } = props;

return (
    <section className={classNames(cls.AuthPage, {}, [className])}>
      <AppLink type={AppLinkType.SECONDARY} className={cls.logo} to={'/'}> <Logo /> </AppLink>
      <BannerAuth/>
      <AuthForm/>
    </section>
  );
};

export default AuthPage;
