import "./App.css";
import Header from "./Components/Header/Header";
import CartProvider from "./Components/Store/CartProvider";
import ProductList from "./Components/Products/ProductList";

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <ProductList></ProductList>
    </CartProvider>
  );
}

export default App;