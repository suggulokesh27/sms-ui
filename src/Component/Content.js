import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Student from "../View/Student";
import routes from "../routes";

const Content = () => {
    return(
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
    )
}

export default Content;