import { AboutPage } from "pages/aboutPage/index";
import { HomePage } from "pages/homePage/index";
import { RouteProps } from "react-router-dom";
import React from "react";
import { NotFound } from "pages/notFound/NotFound";
import UiKit from "pages/UiKit/ui/UiKit";
import MenuPage from "pages/MenuPage/MenuPage";
import PricingPage from "pages/PrcingPage/PricingPage";
import BlogPage from "pages/Blog/ui/BlogPage";
import ArticlePage from "pages/ArticlePage/ui/ArticlePage";
import ContactPage from "pages/ContactPage/ui/ContactPage";
import LoginPage from "pages/Auth/LoginPage/ui/LoginPage";
import AuthPage from "pages/Auth/AuthPage/ui/AuthPage";
import ForgotPasswordPage from "pages/Auth/ForgotPasswordPage/ui/ForgotPasswordPage";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
  UIKIT = "ui_kit",
  MENU = "menu",
  PRICING = "pricing",
  BLOG = "blog",
  POST = "post",
  CONTACT = "contact",
  NOT_FOUND = "not_found",
}
export const NedWrapperRoutes: Record<AppRoutes, boolean> = {
    [AppRoutes.HOME]: true,
    [AppRoutes.ABOUT]: true,
    [AppRoutes.UIKIT]: true,
    [AppRoutes.MENU]: true,
    [AppRoutes.PRICING]: true,
    [AppRoutes.BLOG]: true,
    [AppRoutes.POST]: true,
    [AppRoutes.CONTACT]: true,
    [AppRoutes.NOT_FOUND]: true,    
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.UIKIT]: "/uikit",
  [AppRoutes.MENU]: "/menu",
  [AppRoutes.PRICING]: "/pricing",
  [AppRoutes.BLOG]: "/blog",
  [AppRoutes.POST]: "/post",
  [AppRoutes.CONTACT]: "/contact",

  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.UIKIT]: {
    path: RoutePath.ui_kit,
    element: <UiKit />,
  },
  [AppRoutes.MENU]: {
    path: RoutePath.menu,
    element: <MenuPage />,
  },
  [AppRoutes.PRICING]: {
    path: RoutePath.pricing,
    element: <PricingPage />,
  },
  [AppRoutes.BLOG]: {
    path: RoutePath.blog,
    element: <BlogPage />,
  },
  [AppRoutes.POST]: {
    path: RoutePath.post,
    element: <ArticlePage />,
  },
  [AppRoutes.CONTACT]: {
    path: RoutePath.contact,
    element: <ContactPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};


//   [AppRoutes.LOGIN]: {
//     path: RoutePath.login,
//     element: <LoginPage />,
//   },
//   [AppRoutes.AUTH]: {
//     path: RoutePath.auth,
//     element: <AuthPage />,
//   },
//   [AppRoutes.FORGET_PASSWORD]: {
//     path: RoutePath.forgot_password,
//     element: <ForgotPasswordPage />,
//   },