import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import { useContext } from 'react'

const App = () => {
    setLocalStorage()
  const[user, setUser]= useState(null)
  const AuthData= useContext(AuthContext)
  
  setLocalStorage()
 useEffect(() => {
  if(AuthData){
    const loggedInUser=localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
      // const user = JSON.parse(loggedInUser); // Parse if loggedInUser is a JSON string
      // setUser(user.role);
    }
  }
  
   
 }, [AuthData])

 
  const handleLogin=(email,password)=>{
    if(email=="admin@example.com" && password=="123" ){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    
    else if(AuthData && AuthData.employeesData.find((e)=>email== e.email && e.password==password) ){
      setUser("employee")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
    else{
      alert("Invalid Credentials")
    }
  }
  
  
  return (
   <>
   {!user ? <Login handleLogin={handleLogin}/>:''}
   {user=="employee"?<EmployeeDashboard/>:""}
   {user=="admin"?<AdminDashboard/>:""}
   
   </>
  )
}

export default App
