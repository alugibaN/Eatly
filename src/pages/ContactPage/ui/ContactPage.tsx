import cls from "./ContactPage.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import Mobail from "shared/assets/img/Mobile.png";
import TitleGroup from "shared/assets/img/Grouppp.svg";
import StarGroup from "shared/assets/img/Group.png";
import Button, { ButtonType } from "shared/ui/button/Button";

interface ContactPageProps {
  className?: string;
}

const ContactPage = (props: ContactPageProps) => {
  const { className } = props;
  return (
    <main className={classNames(cls.ContactPage, {}, [className])}>
      <div className={cls.contact__page}>
        <div className={cls.contact__container}>
          <img className={cls.contact__star} src={StarGroup} alt="" />
          <TitleGroup className={cls.contact__subtitle} />
        </div>
        <img className={cls.contact__app_img} src={Mobail} alt="Mobail" />
      </div>
      <form className={cls.contact__form}>
        <h1 className={cls.contact__form_title}>
          Customer
          <span className={cls.support}>Support</span>
        </h1>
        <fieldset className={cls.contact__form_fieldset}>
          <input
            placeholder="FULL NAME"
            className={cls.contact__form_name}
            type="text"
          />
          <input
            placeholder="ENTER YOUR EMAIL"
            className={cls.contact__form_email}
            type="text"
          />
          <textarea
            placeholder="ENTER THE, PROBLEM OR QUERY"
            className={cls.contact__form_text}
            name=""
            id=""
          />
          <Button
            type={ButtonType.PRIMARY}
            className={cls.contact__form_button}
          >
            {" "}
            Sand Now{" "}
          </Button>
        </fieldset>
      </form>
    </main>
  );
};

export default ContactPage;
