import { useTranslation } from "react-i18next";
import React from "react";

const HomePage = () => {
    const { t } = useTranslation();
    return(
        <div>
            {t("Домашняя страница")}

        </div>
    ) 
};

export default HomePage;
