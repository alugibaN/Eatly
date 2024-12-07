import cls from "./Dashboard.module.scss"
import { classNames } from "shared/lib/classNames/ClassNames"
import Food from "shared/assets/icons/Food.png"

 interface DashboardProps {
 className?: string
}

const Dashboard = (props: DashboardProps) => {
  const {className} = props 
  return (
     <section className={classNames(cls.Dashboard, {}, [className])}>
      <h2>Control <span>Purchases</span> Via Dashboard</h2>
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
    </section>
  )
};

export default Dashboard;
