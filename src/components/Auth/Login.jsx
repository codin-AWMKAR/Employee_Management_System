import React, {useState} from 'react'

const Login = ({handleLogin}) => {
     const[email,setEmail] = useState('');
     const[password,setPassword]=useState('');

     
   
     //this function is used as an eventlistener to know that our form is submitted
    const submitHandler =(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        console.log("email is",email)
        console.log("password is",password)
        setEmail("")
        setPassword("")
    }
 
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 rounded-xl border-emerald-600  p-20">
            <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col items-center justify-center">
                <input required value={email} className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder="Enter your email"
                onChange={(e)=>{setEmail(e.target.value)}} />
                <input required value={password} className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-3 placeholder:text-gray-400' type="password" placeholder="Enter password"
                onChange={(e)=>{setPassword(e.target.value)}}/>
                <button  className='text-white outline-none bg-emerald-600 border-none mt-5 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white'>Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login
