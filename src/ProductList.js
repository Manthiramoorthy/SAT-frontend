import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css"


function ProductList() {
    console.log("ProductList rendered");

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setProducts(data)
        })
    }, [])

    
    return (
        <div className="row">
            {
                products.map((product) =>{
                    return(
                        <ProductCard
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            imageUri={product.image}
                            />
                    )
                })
            }
        </div>
    )
}

export default ProductList