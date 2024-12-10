import cls from "./Coments.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Path from "shared/assets/icons/Path.svg"
import Avatar from "shared/assets/icons/Avatar.png"

 interface CommentsProps {
 className?: string
}

const Comments = (props: CommentsProps) => {
  const {className} = props 
  return (
     <section className={classNames(cls.comments, {}, [className])}>
        <h2 className={cls.comments__title}>Customer <span className={cls.comments__say}>Say</span></h2>
        <ul className={cls.comments__spisok}>
          <li className={cls.comments__item}>
            <div>
            <img src={Avatar} alt="avatar" className={cls.comments_img} />
            <p className={cls.comments__name}>Alexander R.</p>
            <span className={cls.comments__time}>01 Eear</span>
            {/* <Path/> */}
            </div>
            <p  className={cls.coments__text}>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
          </li>
        </ul>
    </section>
  )
};

export default Comments;
