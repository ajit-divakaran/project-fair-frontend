
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import { Pagenotfound } from './pages/Pagenotfound'
import Footer from './components/Footer'
import Header from './components/header'


function App() {


  return (
 <>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/login' element={<Auth/>}/>
  <Route path='/register' element={<Auth register={true}/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='*' element={<Pagenotfound/>}/>
 </Routes>
 <Footer/>
 
 </>
    
  )
}

export default App
