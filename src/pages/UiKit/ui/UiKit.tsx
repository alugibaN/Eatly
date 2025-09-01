import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import cls from "./UIkit.module.scss"
import Input from "shared/ui/Input/Input";

const UiKit = () => {
  return (
    <div className={cls.ui}>
      <Input placeholder="Search" error={true} errorText="Ошибка"/>
      <Input border={true} placeholder="E-mail" />
    </div> 

  )
};

export default UiKit;
