import { useContext } from "react";

import ProductList from "../Products/ProductList";
import About from "../Layout/About";
import Home from "../Layout/Home";
import ContactUs from "../Layout/ContactUs";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductPage from "../Products/ProductPage";
import AuthForm from "../Auth/AuthForm";
import AuthContext from "../Store/AuthContext";

export const routePath = {
  Home: "/",
  Default: "*",
  Store: "/store",
  About: "/about",
  ContactUs: "/contact-us",
  ProductPage: "/store/product",
  Login: "/login",
};

const Routers = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path={routePath.Home} element={<Home />} />
        <Route path={routePath.Default} element={<Home />} />
        <Route
          path={routePath.Store}
          element={
            authCtx.isLoggedIn ? (
              <ProductList />
            ) : (
              <Navigate to={routePath.Login} />
            )
          }
        />
        <Route path={routePath.ProductPage} element={<ProductPage />} />
        <Route path={routePath.About} element={<About />} />
        <Route path={routePath.Login} element={<AuthForm />} />
        <Route path={routePath.ContactUs} element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default Routers;