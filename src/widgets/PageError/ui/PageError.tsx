import cls from "./PageError.module.scss"
import { classNames } from "shared/utils/classNames/ClassNames"
import { useTranslation } from "react-i18next";
import Button from "shared/ui/button/Button";

 interface PageErrorProps {
 className?: string
}

const PageError = (props: PageErrorProps) => {
    const {className} = props 
    const {t} =useTranslation()
    const reloadPage = ()=>{
        location.reload()
    }
    return (
        <div className={classNames(cls.page__error, {}, [className])}>
            <p>
                {t("Произошла непредвиденная ошибка")}
            </p>
            <Button onClick={reloadPage}>
                {t("Обновить страницу")}
            </Button>
      
        </div>
    )
};

export default PageError;

