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
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData= useContext(AuthContext)
  
 
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    console.log(loggedInUser)
    if(loggedInUser){
      
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])

 
  const handleLogin=(email,password)=>{
    if(email=="admin@example.com" && password=="123" ){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    
    else if(AuthData){
      const employee =  AuthData.employeesData.find((e)=>email== e.email && e.password==password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee})) 
      }
      
    }
    else{
      alert("Invalid Credentials")
    }
  }
  
  
  return (
   <>
   {!user ? <Login handleLogin={handleLogin}/>:''}
   {user=="admin"?<AdminDashboard/>:user=="employee"?<EmployeeDashboard data={LoggedInUserData}/>:null}
   
   
   </>
  )
}

export default App
