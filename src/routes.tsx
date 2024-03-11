import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './common/NavBar';
import Agents from './pages/Agents';
import Error from './pages/Error';
import Guns from './pages/Guns';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Maps from './pages/Maps';
import Sprays from './pages/Sprays';

type RouteArrayProps = {
  path: string;
  component: React.FC;
  private: boolean;
  hideNavBar?: boolean;
};

const RoutesArray: RouteArrayProps[] = [
  {
    path: '/',
    component: Home,
    private: false,
  },
  {
    path: '/weapons',
    component: Guns,
    private: false,
  },
  {
    path: '/agents',
    component: Agents,
    private: false,
  },
  {
    path: '/maps',
    component: Maps,
    private: false,
  },
  {
    path: '/sprays',
    component: Sprays,
    private: false,
  },
  {
    path: '/not-found',
    component: NotFound,
    private: false,
    hideNavBar: true,
  },

  {
    path: '/error',
    component: Error,
    hideNavBar: true,
    private: false,
  },
];

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesArray.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <>
                  {!route.hideNavBar && <NavBar />}
                  <route.component />
                </>
              }
              errorElement={<Error />}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
