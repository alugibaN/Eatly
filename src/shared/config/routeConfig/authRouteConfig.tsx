import AuthPage from "pages/Auth/AuthPage/ui/AuthPage";
import ForgotPasswordPage from "pages/Auth/ForgotPasswordPage/ui/ForgotPasswordPage";
import LoginPage from "pages/Auth/LoginPage/ui/LoginPage";
import { RouteProps } from "react-router-dom";

 enum AuthRoutes {
  LOGIN = 'login',
  AUTH = 'auth',
  FORGET_PASSWORD = 'forgot_password'
};

 const AuthRoutePath: Record<AuthRoutes, string> = {
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