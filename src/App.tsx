import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageLayout } from './layouts/PageLayout';
import { Home } from './pages/Home';
import { Servises } from './pages/Servises';
import { EditForm } from './pages/EditForm';

import { pathRoutes } from './Routes';

import './app.scss';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.ROUTE_HOME} element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path={pathRoutes.ROUTE_SERVICES} element={<Servises />} />
          <Route path={pathRoutes.ROUTE_SERVICES_ID} element={<EditForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
