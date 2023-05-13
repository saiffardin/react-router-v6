import {Route, Routes} from 'react-router-dom'
import './App.css'
import About from './Routes/About'
import Admin from './Routes/Admin'
import Home from './Routes/Home'
import FeaturedProducts from './Routes/Products/FeaturedProducts'
import NewProducts from './Routes/Products/NewProducts'
import Products from './Routes/Products/Products'
import UserDetails from './Routes/UserDetails'
import Users from './Routes/Users/Users'
import CustomNavbar from './components/CustomNavbar'

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
