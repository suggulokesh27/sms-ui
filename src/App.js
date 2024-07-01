import React, { Suspense, lazy } from 'react';
// import DefaultLayout from './Layout/DefaultLayout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Student from './View/Student';

const DefaultLayout = lazy(()=> import("./Layout/DefaultLayout"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
