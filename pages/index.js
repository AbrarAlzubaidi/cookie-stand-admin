import { useState } from 'react'
import axios from 'axios';
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'

const userData=''
const URL = 'http://127.0.0.1:8000/';
const tokenURL = URL + 'api/token/';
const refreshToken = URL+'api/token/refresh'

const App = () => {
  // if user logged in show cookie stand admin component
  // else show login form component
  const [token, setToken] = useState('')
  const [refreshToken, setRefreshToken] =useState('')

  const loginHandler = async (user_data)=>{
    userData= user_data
    const resToken = await axios.post(tokenURL,user_data)
    setToken(resToken.data.access)
    setRefreshToken(resToken.data.refresh)
  }

  const signoutHandler =()=>{
    setToken('')
  }

  //  if token not found show login page
  if (!token) return <LoginForm loginHandler={loginHandler}/>

  return (
    <>
      {/* token found show cookie stand pag */}
      <CookieStandAdmin token={token} signoutHandler={signoutHandler} userData={userData}/>
    </>
  )
}
export default App
