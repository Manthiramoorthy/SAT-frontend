import "bootstrap/dist/css/bootstrap.min.css"

function ProductCard({ title, description, price, imageUri }) {
    return (
        <div className="col-md-3 col-sm-12 m-2 card p-3">
            <h1>{title}</h1>
            <img src={imageUri} alt={title} className="img-fluid" />
            <p>{description}</p>
            <h3>{price}</h3>
        </div>
    )
}

export default ProductCard