import DashboardPage from "pages/DashboardPage/DashboardPage";
import { RouteProps } from "react-router-dom";

 enum ProfileRoutes {
  DASHBOARD = 'dashboard',
  // ORDERS = 'orders',
  // MESSAGES = 'messages',
  // MYWALLETS = 'my_wallets',
  // ACTIVITY ='activity'
}
 const ProfileRoutePath: Record<ProfileRoutes, string> = {
   [ProfileRoutes.DASHBOARD]: '/dashboard'
  // [ProfileRoutes.ORDERS]: '/orders',
  // [ProfileRoutes.MESSAGES]: '/messages',
  // [ProfileRoutes.MYWALLETS]: '/my_wallets',
  // [ProfileRoutes.ACTIVITY]: '/activity',
}

export const ProfileRouteConfig: Record<ProfileRoutes, RouteProps> = {
  [ProfileRoutes.DASHBOARD]: {
    path: ProfileRoutePath.dashboard,
    element: <DashboardPage/>,
  }

}