import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Layout/Footer";
import CartProvider from "./Components/Store/CartProvider";
import Routers from "./Components/Routers/Routers";
import { AuthContextProvider } from "./Components/Store/AuthContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <AuthContextProvider>
          <Header></Header>
          <Routers></Routers>
          <Footer></Footer>
        </AuthContextProvider>
      </CartProvider>
    </Router>
  );
}

export default App;