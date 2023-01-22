import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route,Link} from 'react-router-dom';
import { Home } from './pages/home';
import { Dashboard } from './pages/dashboard';
import { ProtectedRoute } from './utils/protectedRoutes';
import { Login } from './pages/Login';
import { Signup } from './pages/signup';
import { useNavigate } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
   
  return (

    <Routes>
        <Route path = "/login" element = {
        <ProtectedRoute>
          <Login/>
        </ProtectedRoute>
        
        }></Route>
        <Route path = "/dashboard" element = {
          <ProtectedRoute>
          <Dashboard/>
          </ProtectedRoute>
        }>
          <Route path = "home" element = {<Home/>}></Route>  
        </Route>

        <Route path = "/signup" element = {<Signup/>}></Route>
     </Routes>

   
  )
}

export default App
