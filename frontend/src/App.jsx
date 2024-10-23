import React from 'react'
import Dashboard from './bot/pages/Dashboard';
import Profile from './bot/pages/Profile';
import {Routes,Route,BrowserRouter} from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div>
      // <div className="shrink-0 group p-2 w-full flex justify-between items-center">
      //   <div className="flex items-center">
      //     <img className="inline-block shrink-0 size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
      //     <div className="ms-3">
      //       <h3 className="font-semibold text-gray-800 dark:text-white">Mark Wanner</h3>
      //       <p className="text-sm font-medium text-gray-400 dark:text-neutral-500">mark@gmail.com</p>
      //     </div>
      //   </div>
      //   <div className="shadow-sm p-2">
      //      <i className="bi bi-gear"></i>
      //   </div>
      // </div>
    //   <Dashboard/>
    // </div>
  )
}
