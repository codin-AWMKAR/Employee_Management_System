import React from 'react'
import Header from '../essentials/Header'
import TaskCount from '../essentials/TaskCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header data={data}/>
      <TaskCount  data={data}/>
      <TaskList  data={data}/>
    </div>
  )
}

export default EmployeeDashboard
