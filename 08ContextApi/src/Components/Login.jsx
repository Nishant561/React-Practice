import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handelSubmit = (e)=>{
        e.preventDefault()
        setUser({username})
    }

  return (
    <div>
      <h2>Login</h2>
      <input 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        type='text'
        placeholder='USername'
      
      />
      <input 
        type='text'
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
