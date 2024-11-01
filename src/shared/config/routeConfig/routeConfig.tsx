import { AboutPage } from "pages/aboutPage/index";
import { HomePage } from "pages/homePage/index";
import { RouteProps } from "react-router-dom";
import React from "react";
import {NotFound} from "pages/notFound/NotFound";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND ="not_found"
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>
    },
    [AppRoutes.ABOUT]: {
        path:RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path:RoutePath.not_found,
        element: <NotFound/>
    }
}