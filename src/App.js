import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ProductList from './product/ProductList';

function App() {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page after logout
  }
  return (
    <div className='m-5'>
      <h1>App</h1>
      <a className='btn btn-primary m-4' href='/addproduct'>Add Product</a>
      <a className='btn btn-primary' onClick={handleLogout}>Logout</a>
      <ProductList />
    </div>
  );
}

export default App;
