import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Home/Home/Instructors/Instructors";
import Classes from "../pages/Home/Home/Classes/Classes";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Home/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AddaClass from "../pages/Dashboard/AddaClass/AddaClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import Feedback from "../pages/Dashboard/ManageClasses/Feedback";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // Instructor
            {
                path: 'addclass',
                element: <AddaClass></AddaClass>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            // Student
            {
                path:'myselectedclass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'myenrolledclass',
                element: <MyEnrolledClass></MyEnrolledClass>
            },
            // Admin
            {
                path: 'manageclass',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'feedback/:id',
                element: <Feedback></Feedback>
            }
        ]
    }
]);

export default router