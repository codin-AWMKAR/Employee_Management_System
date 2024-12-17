import React from 'react'
import Header from '../essentials/Header'
import CreateTask from '../essentials/CreateTask'
import AllTask from '../essentials/Alltask'

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
