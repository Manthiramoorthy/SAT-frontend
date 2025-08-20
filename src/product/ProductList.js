import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css"

function ProductList() {
    console.log("ProductList rendered");

    const [products, setProducts] = useState([])

    useEffect( () => {
        console.log("Fetching products...");
        fetchProducts();
    }, [])

    async function fetchProducts() {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + localStorage.getItem("token") || "",
                },

            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                console.error("Failed to fetch products:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }


    return (
        <div className="row">
            {
                products.map((product) => {
                    return (
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