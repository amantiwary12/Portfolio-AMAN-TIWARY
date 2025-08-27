import React from 'react'
import Naqvbar from '../Navqbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
<Naqvbar />
    <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4  '>
        <h1>Login Page</h1>
        <form>
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
           <Link to={"/"} > <button type="submit">Login</button></Link>
        </form>
    </div>
    </div>

  )
}

export default Login
