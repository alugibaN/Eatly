import cls from "./AuthPage.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import AppLink, { AppLinkType } from "shared/ui/appLink/AppLink";
import BannerAuth from "widgets/Banner/ui/BannerAuth/BannerAuth";
import AuthForm from "entities/Auth/ui/AuthForm";
import { UiIcons } from "shared/assets/icons/UIIcons";

interface AuthPageProps {
  className?: string;
}

const AuthPage = (props: AuthPageProps) => {
  const { className } = props;

  return (
    <section className={classNames(cls.AuthPage, {}, [className])}>
      <AppLink type={AppLinkType.SECONDARY} className={cls.logo} to={"/"}>
        {" "}
        <UiIcons.logoMini />{" "}
      </AppLink>
      <BannerAuth />
      <AuthForm />
    </section>
  );
};

export default AuthPage;
