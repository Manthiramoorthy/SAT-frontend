import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AddCount from "./Addcount";
import AddProduct from "./product/AddProduct";
import PageNotFound from "./PageNotFound";
import Login from "./auth/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import Register from "./auth/Register";

function Router() {
    console.log("Router rendered");
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={
                        <ProtectedRoute>
                            <App />
                        </ProtectedRoute>
                    } />
                    <Route path="/addcount" element={
                        <ProtectedRoute>
                            <AddCount />
                        </ProtectedRoute>
                    } />
                    <Route path="/addproduct" element={
                        <ProtectedRoute role={"admin"}>
                            <AddProduct />
                        </ProtectedRoute>
                    } />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;