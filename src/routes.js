import React from "react";
const Student = React.lazy(()=> import("./View/Student/Student"));
const Exam = React.lazy(()=> import("./View/Eaxm"));
const Dashboard = React.lazy(()=> import("./View/Dashboard"));
const StudentRegForm = React.lazy(() => import("./View/Student/StudentRegForm"))

export const routes = [
    {
        name : "student",
        path : "/student",
        element : Student
    },
    {
        name : "exam",
        path : "/exam",
        exact : true,
        element : Exam 
    },
    {
        name : "dashboard",
        path : "/dashboard",
        exact : true,
        element : Dashboard 
    },
   
]

export const studentRoute =[
    {
        name : "registration",
        path : "add",
        element : StudentRegForm 
    },
]
