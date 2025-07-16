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
        <Logo className={cls.footer__link_logo} />
        <AppLink
          className={cls.footer__link_blog}
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
        >
          Blog
        </AppLink>
        <AppLink
          className={cls.footer__link_pricing}
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
        >
          Pricing
        </AppLink>
        <AppLink
          className={cls.footer__link_about}
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
        >
          About Us
        </AppLink>
        <AppLink
          className={cls.footer__link_contact}
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
        >
          Contact
        </AppLink>
      </div>
      <div className={cls.footer__social}>
        <a href="/" className={cls.footer__social_link}>
          {" "}
          <Insta className={cls.footer__icons} />{" "}
        </a>
        <a href="/" className={cls.footer__social_link}>
          <LinkedIn className={cls.footer__icons} />
        </a>
        <a href="/" className={cls.footer__social_link}>
          <Facebook className={cls.footer__icons} />
        </a>
        <a href="/" className={cls.footer__social_link}>
          <Tviter className={cls.footer__icons} />
        </a>
      </div>
      <span className={cls.eatly}>© 2023 EATLY All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
