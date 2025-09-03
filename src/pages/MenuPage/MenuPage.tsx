import MenuHead from "widgets/MenuHead/ui/MenuHead";
import TopRestaurants from "widgets/Restaurants/ui/TopRestaurants/TopRestaurants";
import DishesTop from "widgets/Dishes/ui/DishesTop/DishesTop";
import Questions from "widgets/Questions/ui/Questions";

interface MenuPageProps {
  className?: string;
}

const MenuPage = (props: MenuPageProps) => {
  const { className } = props;
  return (
    <>
      <MenuHead />
      <TopRestaurants />
      <DishesTop/>
      <Questions/>
    </>
  );
};

export default MenuPage;
