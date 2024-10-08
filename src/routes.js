import React from "react";
// const Student = React.lazy(()=> import("./View/Student/Student"));
// const Exam = React.lazy(()=> import("./View/Exam/Eaxm"));
// const Dashboard = React.lazy(()=> import("./View/Dashboard/Dashboard"));

//Student Info
const RegistrationForm = React.lazy(() => import("./View/Registration/RegistrationForm"));
const StudentView = React.lazy(() => import("./View/Student/StudentView"));

//Exam
const ExamRecords = React.lazy(()=>import("./View/Exam/ExamRecords"));

//ContentBar route
export const routes = [
    {
        name : "registration",
        path : "student/add",
        element : RegistrationForm 
    },
    {
        name : "View",
        path : "student/view",
        element : StudentView 
    },
    {
        name : "Exam",
        path : "exam/records",
        element : ExamRecords
    },
]