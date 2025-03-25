import "./App.css";
import { Route, Routes } from 'react-router'
import TopBar from "./components/topBar/topBar";
import BottomInfo from "./components/bottomInfo/bottomInfo";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import AdminLayout from "./layouts/AdminLayout"
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>
        <section>
          <ProductGrid/>
        </section>
      </main>
      <footer>
        <BottomInfo />
      </footer>
      <Routes>
        <Route element={<DefaultLayout />}></Route>
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </>
  )
}

export default App;
