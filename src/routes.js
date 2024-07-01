import React from "react";
const Student = React.lazy(()=> import("./View/Student"));
const Teacher = React.lazy(()=> import("./View/Teacher"));
const Dashboard = React.lazy(()=> import("./View/Dashboard"));

const routes = [
    {
        name : "student",
        path : "/student",
        element : Student
    },
    {
        name : "teacher",
        path : "/teacher",
        element : Teacher 
    },
    {
        name : "dashboard",
        path : "/dashboard",
        element : Dashboard 
    }
]

export default routes;