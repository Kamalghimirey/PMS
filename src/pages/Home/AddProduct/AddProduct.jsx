import { useState } from "react"
import Navbar from "../../../Components/Navbar/Navbar"
import './AddProduct.css'
import axios from "axios"



       //FIRST APPROACH
 const AddProduct = () => {
   const [productImage,setProductImage]=useState("")
   const [productName,setProductName]=useState("")
   const [productDescription,setProductDescription]=useState("")
   const [productMaterial,setProductMaterial]=useState("")

   const addProduct = async(e)=>{
     e.preventDefault()
    const response = await axios.post("https://653026f96c756603295e5848.mockapi.io/product",{
       productImage : productImage,
       productMaterial : productMaterial,
       productDescription : productDescription,
       productName : productName
     })
     console.log(response)
   }

//THIRD APPROACH


return (
   <>
   <Navbar/>
   <div className="form-container">
    <h2> Product Information</h2>
        <form onSubmit={addProduct}>
            <label htmlFor="productImage">Product Image:</label>
            <input type="text" id="productImage" name="productImage" onChange={(e)=>setProductImage(e.target.value)} />

            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" onChange={(e)=>setProductName(e.target.value)} />

            <label htmlFor="productDescription">Product Description:</label>
            <input type="text" id="productDescription" name="productDescription" onChange={(e)=>setProductDescription(e.target.value)} />

            

            <label htmlFor="productMaterial">Product Material:</label>
            <input type="text" id="productMaterial" name="productMaterial" onChange={(e)=>setProductMaterial(e.target.value)} />
            <input type="submit" value="Submit" />
          
        </form>
    </div>
      </>
  )
 }
export default AddProduct