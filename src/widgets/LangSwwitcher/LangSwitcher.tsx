import React from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

function LangSwitcher({ className, short =true }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button 
            type="button"
            theme={ButtonTheme.CLEAR} 
            onClick={toggle}className={classNames(cls.langSwitcher, {}, [className])}
        >
            {t(short ? "Короткий язык": "Язык")}
        </Button>
    );
}

export default LangSwitcher;
