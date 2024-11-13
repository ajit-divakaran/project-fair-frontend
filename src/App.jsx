
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import { Pagenotfound } from './pages/Pagenotfound'
import Footer from './components/Footer'
import Header from './components/header'
import { useContext } from 'react'
import { loginResponseContext } from './context/Contextshare'


function App() {

  const {loginResponse} = useContext(loginResponseContext)
  return (
 <>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/dashboard' element={loginResponse?<Dashboard/>:<Pagenotfound/>}/>
  <Route path='/login' element={<Auth/>}/>
  <Route path='/register' element={<Auth register={true}/>}/>
  <Route path='/projects' element={loginResponse?<Projects/>:<Pagenotfound/>}/>
  <Route path='*' element={<Pagenotfound/>}/>
 </Routes>
 <Footer/>
 
 </>
    
  )
}

export default App
