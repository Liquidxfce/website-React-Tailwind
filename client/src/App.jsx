import "./App.css";
import { Route, Routes } from 'react-router';
import AdminLayout from "./layouts/AdminLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./routes/Home/Home";
import ProductDetails from "./routes/ProductDetails/ProductDetails";
import NewProduct from "./routes/NewProduct/NewProduct";

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />}/>
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products/new" element={<NewProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
