import { useTranslation } from "react-i18next";
import Banner from "widgets/Banner/ui/Banner";
const HomePage = () => {
  const { t } = useTranslation();
  return (
     <section>
        <Banner/>
     </section>
  );
};

export default HomePage;
