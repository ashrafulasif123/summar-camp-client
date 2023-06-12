import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [isInstructor] = useInstructor()

    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Dashboard | Sports Exut</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-success text-base-content">
                <li><NavLink to='/'>Home</NavLink></li>

                    {
                        isInstructor &&
                        <>
                            <li><NavLink to='/dashboard/addclass'>Add a Class</NavLink></li>
                            <li><NavLink to='/dashboard/myclass'>My Class</NavLink></li>

                        </>
                    }

                    {
                        isAdmin &&
                        <>
                            <li><NavLink to='/dashboard/manageclass'>Manage Class</NavLink></li>
                            <li><NavLink to='/dashboard/manageusers'>Manage Users</NavLink></li>
                        </>
                    }
                    {  !isAdmin && !isInstructor &&
                        <>
                            <li><NavLink to='/dashboard/myselectedclass'>My Selected Class</NavLink></li>
                            <li><NavLink to='/dashboard/myenrolledclass'>My Enrolled Class</NavLink></li>
                        </>
                    }
                    
                </ul>
                

            </div>
        </div>
    );
};

export default Dashboard;