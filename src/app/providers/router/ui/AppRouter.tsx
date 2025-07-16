import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import React from "react";
import { PageLoader } from "widgets/PageLoader/index";
import { AuthRouteConfig } from "shared/config/routeConfig/authRouteConfig";
import Footer from "widgets/Footer/ui/Footer";
import { Navbar } from "widgets/navbar";
import { ProfileRouteConfig } from "shared/config/routeConfig/profileRouteConfig";
import ProfileLayot from "widgets/RouteLayout/ProfileLayout/ProfileLayot";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
      {Object.values(AuthRouteConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
      ))}
      {Object.values(ProfileRouteConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={
            <ProfileLayot>
              {element}
            </ProfileLayot>
          }/>
      ))}
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
                <div className="page-wrapper">
                <Navbar />
                {element}
            <Footer />
            </div>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
