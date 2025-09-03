import cls from "./PostHEader.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import MiniAvatar from "shared/assets/img/MiniAvatar.png";

 interface PostHEaderProps {
 className?: string
 data?: boolean 
}

const PostHEader = (props: PostHEaderProps) => {
  const {className, data = true} = props 
  return (
      <div className={classNames(cls.blog__post_container, {}, [className])}>
            <img className={cls.blog__post_avatar} src={MiniAvatar} alt="" />
            <p className={cls.blog__post_avtor}>Written By</p>
            <h4 className={cls.blog__post_name}>Perperzon</h4>
            {data
                  ? <time className={cls.blog__post_data} dateTime="2025-10-12">12 DEC, 2025</time>
                  : null
            }

      </div>
  )
};

export default PostHEader;
