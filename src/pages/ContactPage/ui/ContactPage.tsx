import React from "react";
import cls from "./ContactPage.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";

 interface ContactPageProps {
 className?: string
}

const ContactPage = (props: ContactPageProps) => {
  const {className} = props 
  return (
     <main className={classNames(cls.ContactPage, {}, [className])}>
      <div>
        <h2> Just Contact </h2>
        <img src="" alt="" />
      </div>
      <form>
        <fieldset>
          <input type="text" />
          <input type="text" />
          <textarea name="" id=""></textarea>
          <button></button>
        </fieldset>
      </form>
    </main>
  )
};

export default ContactPage;
