import cls from "./BannerKPI.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import VectorRightTop from "shared/assets/img/VectorRightTop.svg";
import VectorRightBottom from "shared/assets/img/VectorRightBottom.svg";
import VectorLeftTop from "shared/assets/img/VectorLeftTop.svg";
import VectorLeftBottom from "shared/assets/img/VectorLeftBottom.svg";
import { useTranslation } from "react-i18next";

interface BannerKPIProps {
  className?: string;
}

const BannerKPI = (props: BannerKPIProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <ul className={classNames(cls.banner, {}, [className])}>
      <VectorLeftBottom className={cls.banner__vectore_left_bottom} />
      <VectorLeftTop className={cls.banner__vectore__left_top} />
      <li className={cls.bunner__text_container}>
        <h3 className={cls.bunner__title}>10K+</h3>
        <p className={cls.banner__subtitle}>{t("Довольных пользователей")}</p>
      </li>
      <li className={`${cls.bunner__text_container} ${cls.center}`}>
        <h3 className={cls.bunner__title}>4M</h3>
        <p className={cls.banner__subtitle}>{t("Здоровое питание")}</p>
      </li>
      <li className={cls.bunner__text_container}>
        <h3 className={cls.bunner__title}>99.99%</h3>
        <p className={cls.banner__subtitle}>{t("Надежная служба потдержки")}</p>
      </li>
      <VectorRightTop className={cls.banner__vector_right_top} />
      <VectorRightBottom className={cls.banner__vectore_right_bottom} />
    </ul>
  );
};

export default BannerKPI;
