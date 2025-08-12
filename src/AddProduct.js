import "bootstrap/dist/css/bootstrap.min.css"

function AddProduct() {
    return (
        <div className="card m-5">
            <h1 className="m-4">AddProduct</h1>
            <input className="form-control m-4" type="text" placeholder="Enter product name" />
            <input className="form-control m-4" type="text" placeholder="Enter product price" />
            <input className="form-control m-4" type="text" placeholder="Enter product description" />
            <button className="btn btn-primary m-4">Add Product</button>
        </div>
    )
}

export default AddProduct