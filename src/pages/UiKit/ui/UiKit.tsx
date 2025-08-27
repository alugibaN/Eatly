import AppLink, { AppLinkSize, AppLinkType } from "shared/ui/appLink/AppLink";
import cls from "./UIkit.module.scss"

const UiKit = () => {
  return (
    <div className={cls.ui}>
    <AppLink size={AppLinkSize.MEDIUM}  type={AppLinkType.PRIMARY} to={'/uikit'}>"БезЦвета M" </AppLink>
    {/* <AppLink  type={AppLinkType.PRIMARY} to={'/uikit'}>с рамкой M</AppLink>
    <AppLink  type={AppLinkT} to={'/uikit'}>фиалковая M</AppLink>
    <AppLink  type={AppLinkTto={'/uikit'}>"БезЦвета L" </AppLink>
    <AppLink  type={AppLinkTIMARY} to={'/uikit'}>с рамкой L</AppLink>
    <AppLink  type={AppLinkT} to={'/uikit'}>фиалковая L</AppLink> */}
    </div> 

  )
};

export default UiKit;
