
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import AddProduct from './pages/Home/AddProduct/AddProduct'
import SingleProduct from './pages/SingleProduct/singleProduct'

function App() {
  

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/addProduct" element={<AddProduct/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/singleProduct/:id" element={<SingleProduct/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
