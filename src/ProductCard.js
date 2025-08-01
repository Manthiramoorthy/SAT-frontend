import "bootstrap/dist/css/bootstrap.min.css"

function ProductCard({ title, description, price }) {
    return (
        <div className="col-3 m-5 card p-5">
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>{price}</h3>
        </div>
    )
}

export default ProductCard