import cls from "./Coments.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
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
      <ul className={cls.comments__spisok}>
        <li className={cls.comments__item}>
          <div className={cls.comments__user}>
            <img src={Avatar} alt="" className={cls.comments_img} />
            <div className={cls.comments__comments}>
              <p className={cls.comments__name}>Alexander R.</p>
              <span className={cls.comments__time}>01 Eear With Us</span>
            </div>
            <Path className={cls.path} />
          </div>
          <p className={cls.coments__text}>
            “ Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients and save maximum effort. Online
            invoice payment helps companies save time ”
          </p>
          <Stars className={cls.stars} />
        </li>
        <li className={cls.comments__item}>
          <p className={cls.coments__text}>
            “ Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients and save maximum effort. Online
            invoice payment helps companies save time ”
          </p>
          <Stars className={cls.stars} />
        </li>
        <li className={cls.comments__item}>
          <p className={cls.coments__text}>
            “ Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients and save maximum effort. Online
            invoice payment helps companies save time ”
          </p>
          <Stars className={cls.stars} />
        </li>
        <li className={cls.comments__item}>
          <p className={cls.coments__text}>
            “ Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients and save maximum effort. Online
            invoice payment helps companies save time ”
          </p>
          <Stars className={cls.stars} />
        </li>
        <li className={cls.comments__item}>
          <p className={cls.coments__text}>
            “ Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients and save maximum effort. Online
            invoice payment helps companies save time ”
          </p>
          <Stars className={cls.stars} />
        </li>
      </ul>
    </section>
  );
};

export default Comments;
