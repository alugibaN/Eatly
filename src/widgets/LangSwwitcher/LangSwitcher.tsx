import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/ClassNames";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/button/Button";

interface LangSwitcherProps {
  className?: string;
}

function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
      <Button 
        theme={ThemeButton.CLEAR} 
        onClick={toggle}className={classNames(cls.LangSwitcher, {}, [className])}
      >
        {t("Язык")}
      </Button>
  );
}

export default LangSwitcher;
