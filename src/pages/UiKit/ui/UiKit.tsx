import AppLink, { AppLinkTheme } from "shared/ui/appLink/AppLink";
import cls from "./UIkit.module.scss"

const UiKit = () => {
  return (
    <div className={cls.ui}>
    <AppLink  theme={AppLinkTheme.PRIMARY} to={'/uikit'}>"БезЦвета M" </AppLink>
    <AppLink  theme={AppLinkTheme.BORDER_PRIMARY} to={'/uikit'}>с рамкой M</AppLink>
    <AppLink  theme={AppLinkTheme.SECONDARY} to={'/uikit'}>фиалковая M</AppLink>
    <AppLink  theme={AppLinkTheme.PRIMARY} to={'/uikit'}>"БезЦвета L" </AppLink>
    <AppLink  theme={AppLinkTheme.BORDER_PRIMARY} to={'/uikit'}>с рамкой L</AppLink>
    <AppLink  theme={AppLinkTheme.SECONDARY} to={'/uikit'}>фиалковая L</AppLink>


    <div className={cls.fonts}>
      <p className={cls.n}> Попробуйте еду со всего мира black </p>
      <p  className={cls.nn}> Попробуйте еду со всего мира bold</p>
      <p  className={cls.nnn}> Попробуйте еду со всего мира medium</p>
      <p  className={cls.nnnn}> Попробуйте еду со всего мира regular</p>
      <p  className={cls.nnnnn}> Попробуйте еду со всего мира light</p>
      <p  className={cls.nnnnnn}> Попробуйте еду со всего мира thin                         </p>

    </div>
    </div>

  )
};

export default UiKit;
