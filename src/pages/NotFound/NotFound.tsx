import cls from "./NotFound.module.scss";
import { classNames } from "shared/utils/classNames/ClassNames";
import { useTranslation } from "react-i18next";

interface NotFoundProps {
  className?: string;
};

export const NotFound = ({className}:NotFoundProps) => {
    const {t} = useTranslation("notFound")
    return (
        <div className={classNames(cls.not_found, {}, [className])}>
            {t ("Страница не найдена") }
        </div>
    );
};

export default NotFound
