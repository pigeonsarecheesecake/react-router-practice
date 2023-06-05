import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// The pseudo products list in json
import ProductsList from "../Data/products.json";
import Product from "../Components/Product";
import productsStyles from "../Assets/Products.module.css"


export default function Products(){
    // Grabbing the returned object of useParams and destructed it getting the URL parameter
    const [data, setData] = useState([]);
    const {category} = useParams();
    let products =  data.map(product => { return <Product product={product}/> })

    useEffect(
        ()=>{
            setData(ProductsList.products.filter(product => product.category === category))
        },[category]
    )

    return (
        <>
            <h1>{category}</h1>
            <ul className={productsStyles.productsUl}>
                {
                   products
                }
            </ul>
        </>
    )
}