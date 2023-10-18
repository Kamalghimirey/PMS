import Navbar from "../../Components/Navbar/Navbar"
import './Home.css'
 
const Home = () => {
  return (
<>
   <Navbar />
 
<div className="card">
   <img src="your-product-image.jpg" alt="Product Image" />
   <h2 className="product-name">Product Name</h2>
   <p className="product-description">Product Description goes here. Provide a brief description of the product.</p>
</div>
</>
  )
}

export default Home