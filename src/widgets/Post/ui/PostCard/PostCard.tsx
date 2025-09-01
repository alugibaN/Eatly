import React from "react";
import cls from "./PostCard.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import PostHEader from "../PostHeader/PostHeader";

enum PostSize {
  sizeM = "size_M",
  sizeL = "size_L",
} 

export interface PostCardProps {
  obj?: { img: string; title: string },
  className?: string,
  size?: PostSize,
}

const PostCard = (props: PostCardProps) => {
  const { obj, className, size = PostSize.sizeM } = props;

  return (
    <li  className={classNames(cls.blog__post, {}, [className])}>
      <img className={cls.blog__post_img} src={obj.img} alt={obj.title} />
      <h3 className={cls.blog__post_title}>{obj.title}</h3>
      <PostHEader />
    </li>
  );
};

export default PostCard;
