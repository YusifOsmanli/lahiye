import React from 'react'
import Header from '../../Layout/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../Layout/admin/Footer/Footer'
import Sidebar from '../../Layout/admin/Sidebar/Sidebar'

const AdminRoot = () => {
  return (
    <div  style={{ position: 'relative', overflow: 'hidden',display:'flex' }}>
      <div>
        <Sidebar />
      </div>
      <div style={{width:'100%'}}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default AdminRoot