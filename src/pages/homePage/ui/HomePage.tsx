import { useTranslation } from "react-i18next";

const HomePage =()=>{
  const {t} = useTranslation()
  return(
    <div>
       {t("Домашняя страница")}
  

    </div>
  );
};

export default HomePage