import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoProjectRoadmap } from "react-icons/go";
import { TfiDashboard } from "react-icons/tfi";



function SideBar() {
    return (
        <div className='bg-secondary-0 row-start-1 row-span-2 p-8'>
            <ul className='flex flex-col gap-y-4'>
                <li>
                    <CustomNavlink to="/owner/dashboard">
                        <TfiDashboard />
                        <span>داشبورد</span>
                    </CustomNavlink>
                </li>
                <li>
                    <CustomNavlink to="/owner/projects">
                        <GoProjectRoadmap />
                        <span>پروژه ها</span>
                    </CustomNavlink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar


function CustomNavlink({ children, to }) {
    const navlinkStyle = "flex items-center gap-x-2 px-2 py-1.5 hover:bg-primary-100/50 hover:text-primary-900 rounded-lg transition-all duration-300"
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? `${navlinkStyle} bg-primary-100/50 text-primary-900` :
                    `${navlinkStyle} text-secondary-600`
            }
            to={to}
        >
            {children}
        </NavLink>
    )
}


