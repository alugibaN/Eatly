import AuthPage from "pages/Auth/AuthPage/ui/AuthPage";
import ForgotPasswordPage from "pages/Auth/ForgotPasswordPage/ui/ForgotPasswordPage";
import LoginPage from "pages/Auth/LoginPage/ui/LoginPage";
import React from "react";
import { RouteProps } from "react-router-dom";

export enum AuthRoutes {
  LOGIN = 'login',
  AUTH = 'auth',
  FORGET_PASSWORD = 'forgot_password'
};

export const AuthRoutePath: Record<AuthRoutes, string> = {
  [AuthRoutes.LOGIN]: '/login',
  [AuthRoutes.AUTH]: '/auth',
  [AuthRoutes.FORGET_PASSWORD]: '/forgot-password'
};

export const AuthRouteConfig: Record<AuthRoutes, RouteProps> = {
  [AuthRoutes.LOGIN]:{
    path: AuthRoutePath.login,
    element: <LoginPage/>
  },
  [AuthRoutes.AUTH]:{
    path: AuthRoutePath.auth,
    element: <AuthPage/>
  },
  [AuthRoutes.FORGET_PASSWORD]:{
    path: AuthRoutePath.forgot_password,
    element: <ForgotPasswordPage/>
  }
}