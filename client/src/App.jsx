import "./App.css";
import { Route, Routes } from 'react-router'
import AdminLayout from "./layouts/AdminLayout"
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route></Route>
          <Route path="/products/:id"></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
