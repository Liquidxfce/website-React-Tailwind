import "./App.css";
import TopBar from "./components/topBar/topBar";
import BottomInfo from "./components/bottomInfo/bottomInfo";
import ProductGrid from "./components/ProductGrid/ProductGrid";

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
    </>
  )
}

export default App;
