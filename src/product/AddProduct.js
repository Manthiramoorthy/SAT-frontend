import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";

function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function handleAddProduct() {
        try {
            const productData = {
                title: title,
                price: price,
                description: description,
            };
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + localStorage.getItem("token") || "",
                },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                alert("Product added successfully!");
                window.location.href = "/"; // Redirect to product list after adding
            } else {
                alert("Failed to add product. Please try again.");
                console.error("Error adding product:", response.statusText);
            }
        } catch (error) {
            console.error("Error during product addition:", error);
            alert("An error occurred while adding the product. Please try again later.");
        }
    }

    return (
        <div className="card m-5">
            <h1 className="m-4">AddProduct</h1>
            <input onChange={e => setTitle(e.target.value)} className="form-control m-4" type="text" placeholder="Enter product name" />
            <input onChange={e => setPrice(e.target.value)} className="form-control m-4" type="text" placeholder="Enter product price" />
            <input onChange={e => setDescription(e.target.value)} className="form-control m-4" type="text" placeholder="Enter product description" />
            <button onClick={handleAddProduct} className="btn btn-primary m-4">Add Product</button>
        </div>
    )
}

export default AddProduct