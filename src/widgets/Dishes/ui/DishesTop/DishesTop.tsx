import { useTranslation } from "react-i18next";
import cls from "./DishesTop.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import FoodOne from "shared/assets/icons/FoodOne.png";
import Heart from "shared/assets/icons/Heart.svg";

 interface DishesTopProps {
 className?: string
}

const DishesTop = (props: DishesTopProps) => {
  const {className} = props 
  const {t} = useTranslation()

  return (
     <section className={classNames(cls.dishesTop, {}, [className])}>
      <h2 className={cls.dishesTop__title}> Our Top 
        <span className={cls.dishesTop__title_word}> Dishes</span>
      </h2>
      <ul className={cls.dishes}>
        <li className={cls.dish}>
          <Heart className={cls.dish__heart}/>
          <img className={cls.dish__img} src={FoodOne} alt="Food" />
          <span className={cls.dish__heathy}>Heathy</span>
          <h3 className={cls.dish__title}>Chicken Hell</h3>
          <div className={cls.dish__info}>
            <span className={cls.dish__info_time}>24min</span>
            <span className={cls.dish__info_star}>4.8</span>
          </div>
            <div className={cls.dish__cost}>
              <p className={cls.dish__cost_title}>$12.
                <span className={cls.dish__cost_subtitle}>99</span>
              </p>
              <div className={cls.dish__cost_add}>+</div>
            </div>      
        </li>
        <li className={cls.dish}>
          <Heart className={cls.dish__heart}/>
          <img className={cls.dish__img} src={FoodOne} alt="Food" />
          <span className={cls.dish__heathy}>Heathy</span>
          <h3 className={cls.dish__title}>Chicken Hell</h3>
          <div className={cls.dish__info}>
            <span className={cls.dish__info_time}>24min</span>
            <span className={cls.dish__info_star}>4.8</span>
          </div>
            <div className={cls.dish__cost}>
              <p className={cls.dish__cost_title}>$12.
                <span className={cls.dish__cost_subtitle}>99</span>
              </p>
              <div className={cls.dish__cost_add}>+</div>
            </div>      
        </li>
        <li className={cls.dish}>
          <Heart className={cls.dish__heart}/>
          <img className={cls.dish__img} src={FoodOne} alt="Food" />
          <span className={cls.dish__heathy}>Heathy</span>
          <h3 className={cls.dish__title}>Chicken Hell</h3>
          <div className={cls.dish__info}>
            <span className={cls.dish__info_time}>24min</span>
            <span className={cls.dish__info_star}>4.8</span>
          </div>
            <div className={cls.dish__cost}>
              <p className={cls.dish__cost_title}>$12.
                <span className={cls.dish__cost_subtitle}>99</span>
              </p>
              <div className={cls.dish__cost_add}>+</div>
            </div>      
        </li>
        <li className={cls.dish}>
          <Heart className={cls.dish__heart}/>
          <img className={cls.dish__img} src={FoodOne} alt="Food" />
          <span className={cls.dish__heathy}>Heathy</span>
          <h3 className={cls.dish__title}>Chicken Hell</h3>
          <div className={cls.dish__info}>
            <span className={cls.dish__info_time}>24min</span>
            <span className={cls.dish__info_star}>4.8</span>
          </div>
            <div className={cls.dish__cost}>
              <p className={cls.dish__cost_title}>$12.
                <span className={cls.dish__cost_subtitle}>99</span>
              </p>
              <div className={cls.dish__cost_add}>+</div>
            </div>      
        </li>
        <li className={cls.dish}>
          <Heart className={cls.dish__heart}/>
          <img className={cls.dish__img} src={FoodOne} alt="Food" />
          <span className={cls.dish__heathy}>Heathy</span>
          <h3 className={cls.dish__title}>Chicken Hell</h3>
          <div className={cls.dish__info}>
            <span className={cls.dish__info_time}>24min</span>
            <span className={cls.dish__info_star}>4.8</span>
          </div>
            <div className={cls.dish__cost}>
              <p className={cls.dish__cost_title}>$12.
                <span className={cls.dish__cost_subtitle}>99</span>
              </p>
              <div className={cls.dish__cost_add}>+</div>
            </div>      
        </li>
      </ul>
    </section>
  )
};

export default DishesTop;
