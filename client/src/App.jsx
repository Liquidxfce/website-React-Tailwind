import "./App.css";
import TopBar from "./components/topBar/topBar";
import BottomInfo from "./components/bottomInfo/bottomInfo";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>
        <section>
          <ProductCard/>
        </section>
      </main>
      <footer>
        <BottomInfo />
      </footer>
    </>
  )
}

export default App;
