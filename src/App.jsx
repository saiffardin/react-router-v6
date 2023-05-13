import {Route, Routes} from 'react-router-dom'
import './App.css'
import About from './Routes/About'
import FeaturedProducts from './Routes/Products/FeaturedProducts'
import Home from './Routes/Home'
import NewProducts from './Routes/Products/NewProducts'
import Products from './Routes/Products/Products'
import CustomNavbar from './components/CustomNavbar'

function App() {
 

  return (
    <>
      <CustomNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
