import React, { Suspense, lazy } from 'react';
// import DefaultLayout from './Layout/DefaultLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  routes } from './routes';
import Dashboard from './View/Dashboard/Dashboard';
import Login from './Pages/Login';

const DefaultLayout = lazy(() => import("./Layout/DefaultLayout"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>

          {/* Pages */}
          <Route path='/login' element={<Login />} />
        
        
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}

            {/* {Student Info} */}
            {/* <Route path="student/*" element={<Student />}>
              <Route index element={<RegistrationForm />} />
              {studentRoute.map((route, index) => (
                <Route key={index} path={route.path} element={<route.element />} />
              ))}
            </Route> */}

            {/* {Exam info} */}
            {/* <Route path="exam/*" element={<Exam />}>
              {examRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.element />} />
              ))}
            </Route> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
