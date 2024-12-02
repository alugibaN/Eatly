import { useTranslation } from "react-i18next";
import Banner from "widgets/Banner/ui/Banner";
import BannerApp from "widgets/Banner/ui/BannerApp/BannerApp";
import BannerKPI from "widgets/Banner/ui/BannerKPI/BaneerKPI";
import TopRestaurants from "widgets/Restaurants/ui/TopRestaurants/TopRestaurants";
const HomePage = () => {
  const { t } = useTranslation();
  let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ];
  function streetFighterSelection(fighters:any[][], position: any, moves: any){
    let arr:any[] = [];
      for(let i =0; i< 5; i++){
       arr.push(fighters.length)
    }
    return arr 
  }
  
console.log(streetFighterSelection(fighters,[0,0],['up']))
// if(moves[i] === "down" && row !==1){
//   row++
// }
// if(moves[i] === "left"){
//    col === 0 ? col = fighters[row].length-1 : col--
// }
// if(moves[i] === "right"){
//    col === fighters[row].length-1 ? col = 0 : col++
// }
// return arr.push(fighters[row][col])


    return (
    <>
    <Banner/>
    <BannerKPI/>
    <BannerApp/> 
    <TopRestaurants/> 
    </>
  );
};

export default HomePage;
