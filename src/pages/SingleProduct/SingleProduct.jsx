import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import './SingleProduct.css'
import axios from "axios"
import { useEffect, useState } from "react"

const singleProduct = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  //store product data coming in object
  const[product,setProduct]=useState({})


  //delete product
  const deleteProduct = async()=>{
    //api hit to delete
   const response= await axios.delete("https://653026f96c756603295e5848.mockapi.io/product/" +id)
   if(response.status=200){
    navigate("/")
   }else{
    alert("something went wrong!!!..Try agian")
   }
  }

  //fetch single product
  const fetchSingleProduct = async()=>{
    const response = await axios.get("https://653026f96c756603295e5848.mockapi.io/product/" + id)
    setProduct(response.data)
  }
  useEffect(()=>{
    fetchSingleProduct()
  },[])

  return (
    <>
    <Navbar/>
    <div className="card">
            <img src={product.productImage} alt="Product Image" />
            <h2 className="product-name">{product.productName}</h2>
            <p className="product-description">{product.productDescription} </p>
            <p className="product-material">{product.productMaterial}</p>
            <button onClick={deleteProduct}>Delete</button>
            <button onClick={() => navigate(`/editProduct/${product.id}`)}>Edit</button>
            </div>
    </>
  )
}

export default singleProduct