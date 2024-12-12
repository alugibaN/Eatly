import cls from "./Dashboard.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Food from "shared/assets/icons/Food.png";
import Money from "shared/assets/icons/money.svg";
import Wallelt from "shared/assets/icons/wallet.svg";

interface DashboardProps {
  className?: string;
}

const Dashboard = (props: DashboardProps) => {
  const { className } = props;
  return (
    <section className={classNames(cls.Dashboard, {}, [className])}>
      <div className={cls.Dashboard__container}>
        <h2 className={cls.dashboard__title}>
          Control{" "}
          <span className={cls.dashboard__purchases_words}>Purchases</span> Via
          Dashboard
        </h2>
        <ul className={cls.banners}>
          <li className={cls.banner__food_mini}>
            <img
              className={cls.banner__food_mini_img}
              src={Food}
              alt="Mini-Food"
            />
            <div className={cls.banner__food_mini_container}>
              <h4 className={cls.banner__food_mini_title}>Chicken Hell</h4>
              <p className={cls.banner__food_mini_subtitle}>On The Way</p>
            </div>
            <p className={cls.banner__food_mini_time}>3:09 PM</p>
          </li>
          <li className={cls.banner__food_mini}>
            <img
              className={cls.banner__food_mini_img}
              src={Food}
              alt="Mini-Food"
            />
            <div className={cls.banner__food_mini_container}>
              <h4 className={cls.banner__food_mini_title}>Chicken Hell</h4>
              <p className={cls.banner__food_mini_subtitle}>On The Way</p>
            </div>
            <p className={cls.banner__food_mini_time}>3:09 PM</p>
          </li>
          <li className={cls.banner__food_mini}>
            <img
              className={cls.banner__food_mini_img}
              src={Food}
              alt="Mini-Food"
            />
            <div className={cls.banner__food_mini_container}>
              <h4 className={cls.banner__food_mini_title}>Chicken Hell</h4>
              <p className={cls.banner__food_mini_subtitle}>On The Way</p>
            </div>
            <p className={cls.banner__food_mini_time}>3:09 PM</p>
          </li>
        </ul>
      </div>
      <div className={cls.dashboard__purchases}>
        <div className={cls.purchases}>
          <h3 className={cls.purchases__title}>Purchases</h3>
          <select className={cls.purchases__select}>
            <option value="">Этот год</option>
            <option value="">Этот месяц</option>
            <option value="">Эта неделя</option>
            <option value="">Этот день</option>
          </select>
        </div>
        <ul className={cls.purchases_spisok}>
          <li className={cls.purchases__item}>
            <div className={cls.purchases__wallet}>
              <Wallelt />
            </div>
            <div className={cls.purchases_name}>
              <p className={cls.purchases__item_title}>Расход</p>
              <p className={cls.purchases__item_subtitle}>Увеличелся на 10%</p>
            </div>
            <span className={cls.purchases__item_coast}>$409.00</span>
            <div className={`${cls.purchases__item_load} ${cls.wallet}`}></div>
          </li>
          <li className={cls.purchases__item}>
            <div className={cls.purchases__money}>
              <Money />
            </div>
            <div className={cls.purchases__name}>
              <p className={cls.purchases__item_title}>Использование Vocher </p>
              <p className={cls.purchases__item_subtitle}>Увеличелся на 5%</p>
            </div>
            <span className={cls.purchases__item_coast}>$45.78</span>
            <div className={`${cls.purchases__item_load} ${cls.money}`}></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
