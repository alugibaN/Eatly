import { AboutPage } from "pages/aboutPage/index";
import { HomePage } from "pages/homePage/index";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  HOUM = "houm",
  ABOUT = "about",
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOUM]: '/',
  [AppRoutes.ABOUT]: '/bout'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOUM]: {
    path: RoutePath.houm,
    element: <HomePage/>
  },
  [AppRoutes.ABOUT]: {
    path:RoutePath.about,
    element: <AboutPage/>
  }
}