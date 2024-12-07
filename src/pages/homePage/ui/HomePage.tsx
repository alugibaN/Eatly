import { useTranslation } from "react-i18next";
import Banner from "widgets/Banner/ui/Banner";
import BannerApp from "widgets/Banner/ui/BannerApp/BannerApp";
import BannerKPI from "widgets/Banner/ui/BannerKPI/BaneerKPI";
import Dashboard from "widgets/Dashboard/ui/Dashboard";
import DishesTop from "widgets/Dishes/ui/DishesTop/DishesTop";
import TopRestaurants from "widgets/Restaurants/ui/TopRestaurants/TopRestaurants";
const HomePage = () => {
  const { t } = useTranslation();
    return (
    <>
    <Banner/>
    <BannerKPI/>
    <BannerApp/> 
    <TopRestaurants/> 
    <DishesTop/>
    <Dashboard/>
    </>
  );
};

export default HomePage;
