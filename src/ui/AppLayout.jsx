import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

function AppLayout() {
    return (
        <div className='h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]'>
            <Header />
            <SideBar />
            <div className='bg-secondary-100 p-8 overflow-y-auto'>
                <div className='max-w-screen-lg mx-auto '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AppLayout