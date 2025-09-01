import React from "react";
import cls from "./BlogPage.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import FromDiscounts from "widgets/FromDiscounts/ui/FromDiscounts";
import Questions from "widgets/Questions/ui/Questions";
import Img from "shared/assets/img/Image.jpg";
import ImgOne from "shared/assets/img/ImageOne.jpg";
import ImgTwo from "shared/assets/img/ImageTwo.jpg";
import ImgThree from "shared/assets/img/ImageThree.jpg";
import ImgFour from "shared/assets/img/ImageFour.jpg";
import ImgFive from "shared/assets/img/ImageFive.jpg";
import PostCard from "widgets/Post/ui/PostCard/PostCard";

interface BlogPageProps {
  className?: string;
};

let arrayCardInfo = [
  {
    img: Img,
    title:"How To Order Food ?"
  },
  {
    img:ImgOne,
    title: "How To Track The Order ?"
  },
  {
    img:ImgTwo,
    title: "How To Manage Cards ?"
  },
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




const BlogPage = (props: BlogPageProps) => {
  const { className } = props;
  return (
    <main className={classNames(cls.BlogPage, {}, [className])}>
      <FromDiscounts />
      <h1 className={cls.blog__title}>
          Latest <span className={cls.blog__title_article}>Article</span>
      </h1>
      <ul className={cls.blog__posts}>
        {arrayCardInfo.map((el,i) => (
          <PostCard key={i} obj={el}/>
        ))}
      </ul>
      <Questions/>
    </main>
  );
};

export default BlogPage;
