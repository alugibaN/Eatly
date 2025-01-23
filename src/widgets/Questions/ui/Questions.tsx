import React from "react";
import cls from "./Questions.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";

interface QuestionsProps {
  className?: string;
}

const Questions = (props: QuestionsProps) => {
  let obj = [
    {
      question: "How long does delivery take?",
      text: `You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?`,
    },
    {
      question: "How Does It Work?",
      text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br/>What's The Difference Between Free And Paid Plan?",
    },
    {
      question: "How does your food delivery service work?",
      text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br/>What's The Difference Between Free And Paid Plan?",
    },
    {
      question: "What payment options do you accept?",
      text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br/>What's The Difference Between Free And Paid Plan?",
    },
    {
      question: "Do you offer discounts or promotions?",
      text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br/>What's The Difference Between Free And Paid Plan?",
    },
  ];

  
  const { className } = props;
  return (
    <section className={classNames(cls.Questions, {}, [className])}>
      <h2 className={cls.title}>
        Frequently Asked
        <span className={cls.title__words}> Questions</span>
      </h2>
      {obj.map((el: any, i: number) => (
        <details className={cls.details} id={i.toString()}>
          <summary className={cls.summary}>{el.question}</summary>
          <p className={cls.text}>{el.text}</p>
        </details>
      ))}
    </section>
  );
};

export default Questions;
