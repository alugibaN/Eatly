import { AboutPage } from "pages/aboutPage/index";
import { HomePage } from "pages/homePage/index";
import { RouteProps } from "react-router-dom";
import React from "react";
import {NotFound} from "pages/notFound/NotFound";
import UiKit from "pages/UiKit/ui/UiKit";
import MenuPage from "pages/MenuPage/MenuPage";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND ="not_found",
  UIKIT = "ui_kit",
  MENU = "menu",
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "*",
    [AppRoutes.UIKIT]: "/uikikt",
    [AppRoutes.MENU]: "/menu"
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
    [AppRoutes.UIKIT]: {
        path: RoutePath.ui_kit,
        element: <UiKit/>
    },
    [AppRoutes.MENU]: {
        path: RoutePath.menu,
        element: <MenuPage/ >
    },
    [AppRoutes.NOT_FOUND]: {
        path:RoutePath.not_found,
        element: <NotFound/>
    }
}