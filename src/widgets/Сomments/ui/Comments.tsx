import cls from "./Coments.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import Path from "shared/assets/icons/Path.svg";
import Avatar from "shared/assets/icons/Avatar.png";
import Stars from "shared/assets/icons/Stars.svg";

interface CommentsProps {
  className?: string;
}

const Comments = (props: CommentsProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.comments, {}, [className])}>
    <h2 className={cls.comments__title}>
      Customer <span className={cls.comments__say}>Say</span>
    </h2>
    
    <div className={cls.comments__wrapper}>
      <ul className={cls.comments__list}>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item} className={cls.comments__item}>
            {item === 1 && (
              <div className={cls.comments__user}>
                <img 
                  src={Avatar} 
                  alt="User avatar" 
                  className={cls.comments__img} 
                  loading="lazy"
                />
                <div className={cls.comments__userInfo}>
                  <p className={cls.comments__name}>Alexander R.</p>
                  <span className={cls.comments__time}>01 Year With Us</span>
                </div>
                <Path className={cls.comments__path} />
              </div>
            )}
            
            <p className={cls.comments__text}>
              "Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time"
            </p>
            
            <Stars className={cls.comments__stars} />
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};

export default Comments;
