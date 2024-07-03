import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Student from "../View/Student";
import routes from "../routes";
import Dashboard from "../View/Dashboard";

const Content = () => {
    return(
        <div>
             <Suspense fallback={
        <p>
            content Loading...
        </p>
       }>
        <Routes>
            { 
                routes.map((route,index) => {
                    <Route
                    key={index}
                    path={route.path}
                    element ={ <route.element />}
                    />
                })
            }
        </Routes>
       </Suspense>
        </div>
      
    )
}

export default Content;