import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import { frontRoutes } from './routes/routes';
import './App.css';

function App() {
  const routes = [...frontRoutes];
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {routes.map((route, idx) => (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact ?? false}
                element={<route.component />}
              />
            )
          ))}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
