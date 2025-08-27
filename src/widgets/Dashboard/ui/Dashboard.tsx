import cls from "./Dashboard.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Money from "shared/assets/icons/money.svg";
import Wallelt from "shared/assets/icons/wallet.svg";
import MiniDish from "widgets/Dishes/ui/MiniDish/MiniDish";
// import SweDish from "shared/assets/icons/SweDish.png";
// import SweBur from "shared/assets/icons/SweBurg.png";
// import FoodOne from "shared/assets/icons/FoodOne.png";
import { useState } from "react";
import Vector from "shared/assets/icons/VectorApp.svg";

interface DashboardProps {
  className?: string;
}

let obj = [
  // {
  //   title: "Chicken Hell",
  //   subtitle: "On The Way",
  //   time: "3:09 PM",
  //   img: FoodOne,
  // },
  // {
  //   title: "Swe Dish",
  //   subtitle: "Delivered",
  //   time: "Yesterday",
  //   img: SweDish,
  // },
  // {
  //   title: "Fish Hell Veg",
  //   subtitle: "Cancelled",
  //   time: "Yesterday",
  //   img: SweBur,
  // },
];

const Dashboard = (props: DashboardProps) => {
  const { className } = props;
  let [select, setSelect] = useState("");
  let [cost, setCost] = useState({
    expense: "4780.62",
    progresExpense: "95.61%",
    vocher: "583.45",
    progresVocher: "58.35%",
  });



  const cheangeCost = async (value: string) => {


    if (value === "1") {
      setCost({
        expense: "4780.62",
        progresExpense: "95.61%",
        vocher: "583.45",
        progresVocher: "58.35%",
      });
    } else if (value === "2") {
      console.log(value);
      setCost({
        expense: "409.00",
        progresExpense: "81.8",
        vocher: "45.78",
        progresVocher: "45.7",
      });
    } else if (value === "3") {
      setCost({
        expense: "101.53",
        progresExpense: "50.77%",
        vocher: "11.44",
        progresVocher: "76.27%",
      });
    } else if (value === "4") {
      setCost({
        expense: "14,5",
        progresExpense: "72.5%",
        vocher: "1.71",
        progresVocher: "85.5%",
      });
    }
    console.log(value);
  };

  return (
    <section className={classNames(cls.Dashboard, {}, [className])}>
      <div className={cls.Dashboard__container}>
        <h2 className={cls.dashboard__title}>
          Control{" "}
          <span className={cls.dashboard__purchases_words}>Purchases</span> Via
          Dashboard
        </h2>
        <ul className={cls.banners}>
          {/* {obj.map((el, index) => ( */}
            {/* <MiniDish key={index} item={el} /> */}
          {/* ))} */}
        </ul>
        <Vector className={cls.vectore}/>
      </div>
      <div className={cls.dashboard__purchases}>
        <div className={cls.purchases}>
          <h3 className={cls.purchases__title}>Purchases</h3>
          <select
            onChange={(e) => cheangeCost(e.target.value)}
            name="period"
            className={cls.purchases__select}
          >
            <option value="1">Этот год</option>
            <option value="2">Этот месяц</option>
            <option value="3">Эта неделя</option>
            <option value="4">Этот день</option>
          </select>
        </div>
        <ul className={cls.purchases_spisok}>
          <li className={cls.purchases__item}>
            <div className={`${cls.purchases__wallet} ${cls.purchases__icon}`}>
              <Wallelt />
            </div>
            <div className={cls.purchases_name}>
              <p className={cls.purchases__item_title}>Расход</p>
              <p className={cls.purchases__item_subtitle}>Увеличелся на 10%</p>
            </div>
            <span
              className={cls.purchases__item_coast}
            >{`$${cost.expense}`}</span>
            <div className={`${cls.purchases__item_load} ${cls.wallet}`}>
              <div
                className={cls.progress__value_expense}
                style={{ width: cost.progresExpense }}
              ></div>
            </div>
          </li>

          <li className={cls.purchases__item}>
            <div className={`${cls.purchases__money} ${cls.purchases__icon}`}>
              <Money />
            </div>
            <div className={cls.purchases__name}>
              <p className={cls.purchases__item_title}>Использование Vocher </p>
              <p className={cls.purchases__item_subtitle}>Увеличелся на 5%</p>
            </div>
            <span
              className={cls.purchases__item_coast}
            >{`$${cost.vocher}`}</span>
            <div className={`${cls.purchases__item_load} ${cls.money}`}>
              <div
                className={cls.progress__value_vocher}
                style={{ width: cost.progresVocher }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;


