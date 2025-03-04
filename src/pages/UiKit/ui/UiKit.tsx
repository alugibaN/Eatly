import AppLink, { AppLinkSize, AppLinkTheme } from "shared/ui/appLink/AppLink";
import cls from "./UIkit.module.scss"

const UiKit = () => {
  return (
    <div className={cls.ui}>
    <AppLink size={AppLinkSize.sizeL}  theme={AppLinkTheme.PRIMARY} to={'/uikit'}>"БезЦвета M" </AppLink>
    <AppLink  theme={AppLinkTheme.BORDER_PRIMARY} to={'/uikit'}>с рамкой M</AppLink>
    <AppLink  theme={AppLinkTheme.SECONDARY} to={'/uikit'}>фиалковая M</AppLink>
    <AppLink  theme={AppLinkTheme.PRIMARY} to={'/uikit'}>"БезЦвета L" </AppLink>
    <AppLink  theme={AppLinkTheme.BORDER_PRIMARY} to={'/uikit'}>с рамкой L</AppLink>
    <AppLink  theme={AppLinkTheme.SECONDARY} to={'/uikit'}>фиалковая L</AppLink>
    </div> 

  )
};

export default UiKit;
