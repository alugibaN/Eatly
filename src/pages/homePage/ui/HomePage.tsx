import { useTranslation } from "react-i18next";
import Banner from "widgets/Banner/ui/Banner";
import BannerApp from "widgets/Banner/ui/BannerApp/BannerApp";
import BannerKPI from "widgets/Banner/ui/BannerKPI/BaneerKPI";
import Dashboard from "widgets/Dashboard/ui/Dashboard";
import DishesTop from "widgets/Dishes/ui/DishesTop/DishesTop";
import FromDiscounts from "widgets/FromDiscounts/ui/FromDiscounts";
import TopRestaurants from "widgets/Restaurants/ui/TopRestaurants/TopRestaurants";
import Comments from "widgets/Сomments/ui/Comments";
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
    <Comments/>
    <FromDiscounts/>
    </>
  );
};

export default HomePage;
