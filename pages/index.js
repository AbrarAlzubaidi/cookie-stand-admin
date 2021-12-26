import axios from "axios";
import { useState } from "react";

import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from "../components/LoginForm"

const baseUrl = process.env.NEXT_PUBLIC_COOKIE_STAND_API;
const tokenUrl= baseUrl +'api/token/';
const refreshToken= baseUrl + 'api/token/refresh';


export default function Home(props){

  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  async function getToken(credentials){
    const fetchedToken = await axios.post(tokenUrl, credentials);
    setToken(fetchedToken.data.access);
    setRefreshToken(fetchedToken.data.refresh);
  }

  function signouthandler(){
    setToken('')
  }


  function loginHandler(credentials){
    getToken(credentials)
  }

  
  if (token) return <CookieStandAdmin  token={token} signouthandler={signouthandler} />
 
  return  <LoginForm loginHandler={loginHandler} />

}
