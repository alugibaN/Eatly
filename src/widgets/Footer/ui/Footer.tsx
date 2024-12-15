import cls from "./Footer.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Logo from "shared/assets/icons/logo.svg";
import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import Insta from "shared/assets/icons/insta.svg";
import LinkedIn from "shared/assets/icons/linkedin.svg";
import Facebook from "shared/assets/icons/feicbuk.svg";
import Tviter from "shared/assets/icons/tviter.svg";

interface FooterProps {
  className?: string;
}

const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <footer className={classNames(cls.footer, {}, [className])}>
        <div className={cls.footer__links}>
      <Logo className={cls.footer__logo}/>
    
        <AppLink className={cls.footer__link} theme={AppLinkTheme.SECONDARY} to={"/"}>
          Blog
        </AppLink>
        <AppLink className={cls.footer__link} theme={AppLinkTheme.SECONDARY} to={"/"}>
          Pricing
        </AppLink>
        <AppLink className={cls.footer__link} theme={AppLinkTheme.SECONDARY} to={"/"}>
          About Us
        </AppLink>
        <AppLink className={cls.footer__link} theme={AppLinkTheme.SECONDARY} to={"/"}>
          Contact
        </AppLink>
      </div>
      <div className={cls.footer__social}>
      <span>© 2023 EATLY All Rights Reserved.</span>
        <Insta  className={cls.footer__icons}/>
        <LinkedIn className={cls.footer__icons}/>
        <Facebook className={cls.footer__icons}/>
        <Tviter className={cls.footer__icons}/>
      </div>
    </footer>
  );
};

export default Footer;
