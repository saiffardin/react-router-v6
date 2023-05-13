import {Route, Routes} from 'react-router-dom'
import './App.css'
import About from './Routes/About'

import Home from './Routes/Home'
import FeaturedProducts from './Routes/Products/FeaturedProducts'
import NewProducts from './Routes/Products/NewProducts'
import Products from './Routes/Products/Products'

import Users from './Routes/Users/Users'
import CustomNavbar from './components/CustomNavbar'
import Admin from './Routes/Users/Admin'
import UserDetails from './Routes/Users/UserDetails'


function App() {
 

  return (
    <>
      <CustomNavbar/>

      {/* Routers */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        
        {/* /products */}
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>

        {/* /users*/}
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
