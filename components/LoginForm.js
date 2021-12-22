import React from 'react'
import Header  from './Header'
import Head from 'next/head';
import { useState } from 'react';
function LoginForm(props) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log({
            username: username,
            password: password
        })
        props.loginHandler({
            username: username,
            password: password
        })
        
        
    }
    const usernameHandler =(e)=>{
        e.preventDefault()
        username = e.target.value
        console.log(username)
        setUserName(username)
    }
    const passwordHandler =(e)=>{
        e.preventDefault()
        password = e.target.value
        console.log(password)
        setPassword(password)
    }
    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <header className="flex items-center justify-between p-4 bg-cyan-800">
                <h1 className='text-4xl font-medium text-white'>Log In</h1>
            </header>
            <main>
                <form onSubmit={submitHandler} className='flex-col w-2/4 p-5 m-auto mt-10 text-center border rounded-md bg-cyan-100 border-cyan-700' method='POST'>
                    <h3 className='w-full mb-3 font-bold mt-7'>USER NAME </h3>
                    <input name='username' type="text"  onChange={usernameHandler} className='w-5/6 p-2 mx-auto ' placeholder='User Name'/>
                    <h3 className='w-full mt-4 mb-3 font-bold'>PASSWORD </h3>
                    <input name='password' type='password' onChange={passwordHandler} className='w-5/6 p-2 mx-auto ' placeholder='password' />
                    <input type="submit" value='SIGN IN'  className='w-5/6 p-3 mx-auto mt-8 mb-5 rounded bg-cyan-500'/>
                </form>  
            </main>
            <footer className="p-5 my-8 font-medium text-white bg-cyan-800">
                <p > 2021</p>
            </footer>
        </div>
    )
}

export default LoginForm
