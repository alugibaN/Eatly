import { useTranslation } from "react-i18next";
import Banner from "widgets/Banner/ui/Banner";
import BannerApp from "widgets/Banner/ui/BannerApp/BannerApp";
import BannerKPI from "widgets/Banner/ui/BannerKPI/BaneerKPI";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
    <Banner/>
    <BannerKPI/>
    <BannerApp/>  
    </>
  );
};

export default HomePage;
