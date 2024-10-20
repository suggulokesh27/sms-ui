import React from "react";

// Student Info
const RegistrationForm = React.lazy(() => import("./Views/RegistrationForm/RegistartionForm"));
const StudentView = React.lazy(() => import("./Views/Student/StudentRegistrationForm/StudentRegistrationForm"));

// Attendance
const Attendance = React.lazy(() => import('./Views/Student/Attendance/Attendance'));

// Records (Add, View, Update, Delete)
const AddRecord = React.lazy(() => import('./Views/StudentRecords/AddRecord/AddRecord'));
const ViewRecords = React.lazy(() => import('./Views/StudentRecords/ViewRecord/ViewRecord'));
const UpdateRecord = React.lazy(() => import('./Views/StudentRecords/UpdateRecord/UpdateRecord'));

// Services
const Services = React.lazy(() => import('./Views/Services/Services'));
const ServiceForm = React.lazy(() => import('./Views/Services/ServiceForm'));



// ContentBar route
export const routes = [
    {
        name: "Registration",
        path: "student/add",
        element: RegistrationForm 
    },
    {
        name: "View",
        path: "student/view",
        element: StudentView
    },
    {
        name: "Attendance",
        path: "student/attendance",
        element: Attendance
    },
    {
        name: "Services",
        path: "services",
        element: Services
    },
    {
        name: "ServiceForm",
        path: "serviceForm",
        element: ServiceForm
    },
    // Records Section
    {
        name: "AddRecord",
        path: "record/add",
        element: AddRecord
    },
    {
        name: "ViewRecords",
        path: "record/view",
        element: ViewRecords
    },
    {
        name: "UpdateRecord",
        path: "record/update",
        element: UpdateRecord
    }
];
