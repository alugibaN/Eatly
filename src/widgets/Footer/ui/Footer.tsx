import cls from "./Footer.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import SocialMediaIcons from "shared/assets/icons/SocialMediaIcons";
import { UiIcons } from "shared/assets/icons/UIIcons";

interface FooterProps {
  className?: string;
}

const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <footer className={classNames(cls.footer, {}, [className])}>
      <div className={cls.footer__links}>
        <AppLink
          to={"/"}
          type={AppLinkType.SECONDARY}
          size={AppLinkSize.SMALL}
          className={cls.footer__link_logo}
        >
          <UiIcons.logo/>
        </AppLink>
        <AppLink
          className={cls.footer__link_blog}
          type={AppLinkType.SECONDARY}
          to={"/"}
        >
          Blog
        </AppLink>
        <AppLink
          className={cls.footer__link_pricing}
          type={AppLinkType.SECONDARY}
          to={"/"}
        >
          Pricing
        </AppLink>
        <AppLink
          className={cls.footer__link_about}
          type={AppLinkType.SECONDARY}
          to={"/"}
        >
          About Us
        </AppLink>
        <AppLink
          className={cls.footer__link_contact}
          type={AppLinkType.SECONDARY}
          to={"/"}
        >
          Contact
        </AppLink>
      </div>
      <div className={cls.footer__social}>
        <a href="/" className={cls.footer__social_link}>
          <SocialMediaIcons.insstagram type={"secondary"} />
        </a>
        <a href="/" className={cls.footer__social_link}>
          <SocialMediaIcons.linkedIn type={"secondary"} />
        </a>
        <a href="/" className={cls.footer__social_link}>
          <SocialMediaIcons.facebook type={"secondary"} />
        </a>
        <a href="/" className={cls.footer__social_link}>
          <SocialMediaIcons.twiter type={"primary"} />
        </a>
      </div>
      <span className={cls.eatly}>© 2023 EATLY All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
