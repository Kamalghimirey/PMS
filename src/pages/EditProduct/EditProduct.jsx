import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import'./EditProduct.css'
import axios from "axios"
import { useEffect,useState } from "react"

const EditProduct = () => {
    const navigate = useNavigate()
    const {id} =useParams()
    const [product,setProduct] = useState({})


    const handleChange = (e)=> {
        const {name,value} =e.target
        setProduct({
            ...product,
            [name] : value
    })
    }

    //edit product

    const editProduct = async (e)=>{
        e.preventDefault()
        const response = axios.put("https://653026f96c756603295e5848.mockapi.io/product/" + id,product )
        if(response.status == 200){
            navigate("/singleProduct/" + id)
        } else{
                alert("Something went wrong.Try again")
            }
        
    }


    //fetch product of id
    const fetchProduct = async()=>{
       const response =  await axios.get("https://653026f96c756603295e5848.mockapi.io/product/" +id )
       setProduct(response.data)
    }
    useEffect( () => {
        fetchProduct()
    },[] )
  return (
    <>
    <Navbar/>
    <div className="form-container">
     <h2>Edit Product</h2>
         <form onSubmit={editProduct}>
             <label htmlFor="productImage">Product Image:</label>
             <input type="text" value={product.productImage} id="productImage" name="productImage" onChange={handleChange}  />
 
             <label htmlFor="productName">Product Name:</label>
             <input value={product.productName} type="text" id="productName" name="productName" onChange={handleChange} />
 
             <label htmlFor="productDescription">Product Description:</label>
             <input value={product.productDescription} type="text" id="productDescription" name="productDescription" onChange={handleChange} />
 
             
 
             <label htmlFor="productMaterial">Product Material:</label>
             <input value={product.productMaterial} type="text" id="productMaterial" name="productMaterial" onChange={handleChange} />
             <input type="submit" value="Submit" />
           
         </form>
         </div>
     </>
  )
}

export default EditProduct