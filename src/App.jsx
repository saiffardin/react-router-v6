import {Route, Routes} from 'react-router-dom'
import './App.css'
import About from './Routes/About'
import Home from './Routes/Home'
import Products from './Routes/Products'
import CustomNavbar from './components/CustomNavbar'

function App() {
 

  return (
    <>

      <CustomNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>

    </>
  )
}

export default App
