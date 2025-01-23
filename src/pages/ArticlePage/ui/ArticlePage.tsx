import React from "react";
import cls from "./ArticlePage.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Img from "shared/assets/icons/Pic.jpg";
import PostHEader from "widgets/Post/ui/PostHeader/PostHeader";
import PostCard from "widgets/Post/ui/PostCard/PostCard";
import ImgThree from "shared/assets/icons/ImageThree.jpg";
import ImgFour from "shared/assets/icons/ImageFour.jpg";
import ImgFive from "shared/assets/icons/ImageFive.jpg";
import Button, { ButtonTheme } from "shared/ui/button/Button";

interface WritingProps {
  className?: string;
}

const ArticlePage = (props: WritingProps) => {


  let arrayCardInfo = [
    {
      img: ImgThree,
      title: "Tips & Tricks For Business"
    },
    {
      img:ImgFour,
      title: "How To Control Money ?"
    },
    {
      img: ImgFive,
      title: "Top 5 Business Ideas"
    }
  ] 
  


  const { className } = props;
  return (
    <main className={classNames(cls.Writing, {}, [className])}>
      <h1 className={cls.article__title}> How To Order Food On eatly ?</h1>
      <PostHEader data={false} className={cls.article__avtor}/>
      <img className={cls.article__img} src={Img} alt="" />
      <section className={cls.article__text}>
        <h2 className={cls.article__text_title}>Browse restaurants and menus</h2>
        <p className={cls.article__text_Paragraph}>
          Once you're logged in, you can browse through the list of available restaurants on the Eatly website. 
          You can filter by cuisine, price, and distance to find the perfect restaurant for your needs.
          Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available 
          restaurants on the Eatly website. You can filter by cuisine, price, and distance.
          It was popularized in the 1960s with the release
          Lorem Ipsum passages, and more recently 
        </p>
        <ul className={cls.article__text_spisok}>
          <li className={cls.article__text_spisok_item}>It was popularized in the 1960s with the release</li>
          <li className={cls.article__text_spisok_item}>Lorem Ipsum passages, and more recently </li>
        </ul>

        <h2 className={cls.article__text_title}>Select your items</h2>
        <p className={cls.article__text_Paragraph}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
          looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going 
          through the cites of the word in classical literature, discovered the undoubtable source. 
        </p>

        <h2 className={cls.article__text_title}>Place your order</h2>
        <p className={cls.article__text_Paragraph}>
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
          (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on 
          the theory of ethics, very popular during the Renaissance. 
        </p>
      </section>
      <ul className={cls.top__aticles}>
        <h2 className={cls.article__text_title}>Top Articles</h2>
       {arrayCardInfo.map((el,i)=>(
        <PostCard key={i} obj={el} />
       ))}
      </ul>
      <Button className={cls.button} theme={ButtonTheme.PRIMARY}>Next Article</Button>
     </main>
  );
};

export default ArticlePage;
