import cls from "./Banner.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import Food from "../../../shared/assets/icons/Food.png";
import Graph from "../../../shared/assets/icons/Graph.png";
import Trustpilot from "../../../shared/assets/icons/trust-reviews.svg";
import Arrow from "../../../shared/assets/icons/arrow.svg";
import IllustrationBottom from "../../../shared/assets/icons/illustration-bottom.svg";
import IllustrationTop from "../../../shared/assets/icons/illustration-top.svg";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkSize, AppLinkTheme } from "shared/ui/appLink/AppLink";
import BannerKPI from "./BannerKPI/BaneerKPI";

interface BannerProps {
  className?: string;
}

const Banner = (props: BannerProps) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <section className={classNames(cls.banner, {}, [className])}>
      <div className={cls.bunner__text}>
        <div className={cls.bunner__text_container}>
          <p className={cls.bunner__text_users}>
          {t("БОЛЕЕ 1000 ПОЛЬЗОВАТЕЛЕЙ")}
          </p>
          <h1 className={cls.bunner__text_title}>
            {t("Наслаждайтесь Едой Со Всего")}
            <span className={cls.bunner__text_title_world}>{t("Мира")}</span>
          </h1>
          <h2 className={cls.bunner__text_subtitle}>
            {t("Вкусная помощь")}
            <span className={cls.bunner__text_subtitle_bonus}>{t("20 бонусов")}</span>
            </h2>
          <div className={cls.bunner__text_buttons}>
            <AppLink
              className={cls.banner__text_button}
              theme={AppLinkTheme.PRIMARY}
              size={AppLinkSize.sizeL}
              to={"/"}
            >
              {t("Начать")}
            </AppLink>
            <AppLink theme={AppLinkTheme.BORDER_PRIMARY} to={"/"}>
              {t("Перейти на Pro")}
            </AppLink>
          </div>
          <Trustpilot className={cls.bunner__text_trustpilot} />
        </div>
      </div>
      <div className={cls.banner__food}>
        <div className={cls.bunner__food_circle}>
          <div className={cls.banner__food_mini}>
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
          </div>

          <img className={cls.bunner__food_img} src={Food} alt="Food" />
          <Arrow className={cls.bunner__food_arrow} />
          <img className={cls.bunner__food_graph} src={Graph} alt="graph" />
          <IllustrationTop className={cls.bunner__food_illustrator_top} />
          <IllustrationBottom className={cls.bunner__food_illustration} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
