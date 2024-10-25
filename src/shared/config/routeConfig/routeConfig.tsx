import { AboutPage } from "pages/aboutPage/index";
import { HomePage } from "pages/homePage/index";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage/>
  },
  [AppRoutes.ABOUT]: {
    path:RoutePath.about,
    element: <AboutPage/>
  }
}