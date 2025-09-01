import { useEffect, useState } from "react";




function useSizeWindow(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

let measurementWindow = useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [windowWidth]);

return {windowWidth}

}

export default useSizeWindow