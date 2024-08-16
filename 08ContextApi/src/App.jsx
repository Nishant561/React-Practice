
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/USerContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>react with nishant</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
