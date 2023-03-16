import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../page/home/Home'
import About from '../page/about/About'
import Contact from '../page/contact/Contact'


export default function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/ReactReduxCase'/>}/>
    <Route path='/ReactReduxCase' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  )
}
