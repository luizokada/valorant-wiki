import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './common/NavBar';
import Guns from './pages/Guns';
import Agents from './pages/Agents';

type RouteArrayProps = {
  path: string;
  component: React.FC;
  private: boolean;
};

const RoutesArray: RouteArrayProps[] = [
  {
    path: '/',
    component: Home,
    private: false,
  },
  {
    path: '/guns',
    component: Guns,
    private: false,
  },
  {
    path: '/agents',
    component: Agents,
    private: false,
  },
  {
    path: '/error',
    component: Error,
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
                  <NavBar />
                  <route.component />
                </>
              }
              errorElement={<Error />}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
