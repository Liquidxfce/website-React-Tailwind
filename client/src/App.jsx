import "./App.css";
import { Route, Routes } from 'react-router';
import AdminLayout from "./layouts/AdminLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./routes/Home/Home";
import ProductDetails from "./routes/ProductDetails/ProductDetails";
import NewProduct from "./routes/NewProduct/NewProduct";
import AdminPage from "./routes/AdminPage/AdminPage";


function App() {
  
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />}/>
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="/admin/products/" element={<AdminPage />} />
          <Route path="/admin/products/new" element={<NewProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
