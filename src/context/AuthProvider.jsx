import React  from 'react'
import { createContext, useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const[userData,setUserData]=useState(null);
    useEffect(() => {
        // localStorage.clear()
        setLocalStorage()
        const{employeesData,adminData}=getLocalStorage()
        setUserData({employeesData,adminData})
    }, [])
    // console.log(userData)  //debugging point
     // Mark might have to use JSON methods
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
