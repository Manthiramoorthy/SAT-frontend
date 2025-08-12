import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AddCount from "./Addcount";
import AddProduct from "./AddProduct";
import PageNotFound from "./PageNotFound";

function Router() {
    console.log("Router rendered");
    return (
        <div>
            <div>
                <a href="/" className="btn btn-primary m-2">Home</a>
                <a href="/addcount" className="btn btn-primary m-2">Add Count</a>
                <a href="/addproduct" className="btn btn-primary m-2">Add Product</a>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/addcount" element={<AddCount />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;