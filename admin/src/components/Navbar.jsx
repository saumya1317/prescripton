import React, { useContext } from 'react'
import { assets } from '../assets/assets_admin/assets.js' // <--- Use your correct path
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {

    const { aToken, setAToken } = useContext(AdminContext)

    const logout = () => {
        // 1. Clear the state
        aToken && setAToken('')
        // 2. Clear local storage
        aToken && localStorage.removeItem('aToken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>
                    {aToken ? 'Admin' : 'Doctor'}
                </p>
            </div>
            <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>
                Logout
            </button>
        </div>
    )
}

export default Navbar