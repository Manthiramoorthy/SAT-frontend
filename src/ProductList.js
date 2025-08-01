import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css"


function ProductList() {
    return (
        <div className="row">
            <ProductCard
             title="Mobile"
             description="Mobile - Description"
             price="$23.34" />

             <ProductCard
             title="TV"
             description="TV - Description"
             price="$123.34" />

             <ProductCard
             title="Washing machine"
             description="TV - Description"
             price="$123.34" />

             <ProductCard
             title="Power bank"
             description="TV - Description"
             price="$123.34" />
        </div>
    )
}

export default ProductList