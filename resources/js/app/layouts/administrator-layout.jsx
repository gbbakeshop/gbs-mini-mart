import React, { useEffect, useState } from 'react'
import SideBarSection from './sections/sidebar-section';
import ChatSection from './sections/chat-section';
import Toastify from '../components/toastify';
import LogoutSection from './sections/logout-section';
import { get_account_service } from '../../services/account-service';
import YearSelectSection from './sections/year-select-section';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/app-slice';
import { router, usePage } from '@inertiajs/react';

export default function AdministratorLayout({children,user}) {
  const { url } = usePage()
  
  const path = url.split('/')[2]
  const dispatch = useDispatch()
  useEffect(() => {
    if(user.role != 'admin'){
      router.visit('/cashier')
    }
    dispatch(setUser(user))
  }, []);

  return (
    <>
      <Toastify />
      <div className="flex w-screen h-screen text-gray-700">
        <SideBarSection />
        {/* {
          path == 'branches' &&
          <div className="flex flex-col w-56 border-r border-gray-300">
            <SubSidebarBranchesSection />
          </div>
        }
        {
          path == 'controls' &&
          <div className="flex flex-col w-56 border-r border-gray-300">
            <SubSidebarControlsSection />
          </div>
        } */}

        <div className="flex flex-col flex-grow">
          <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
            <h1 className="text-lg font-medium">GBS Mini Mart Cashiering System</h1>
            <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded ">
              {/* Action 1 */}
            </button>
            <button className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium  rounded ">
              {/* Action 2 */}
              <YearSelectSection />
            </button>
            <button className="relative ml-2 text-sm  group">
              <LogoutSection />
            </button>
          </div>
          <div className=" px-6 overflow-auto max-w-7xl ">
          {children}
          </div>
        </div>
      </div>
      
    </>
  )
}
