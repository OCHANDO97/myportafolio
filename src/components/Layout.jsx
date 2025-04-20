import React from 'react'
import Sidebar from '../components/Sidebar';
import Responsive from '../components/Responsive';


const Layout = ({ children }) => {
  return (
    <>
    <div className="layout"> 
      <Sidebar />
      <Responsive />
      <main className="layout__content">
        {children}
      </main>
    </div>
  </>
  )
}

export default Layout