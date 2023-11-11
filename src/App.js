import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/Api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import AllProduits from "./pages/AllProduits";
import Home from "./Home";
import Cart from "./pages/Cart";
import Commande from "./pages/Commande";
import Login from "./pages/Login";
import LoginUser from "./pages/LoginUser";
import DashboardAdmin from "./pages/DashboardAdmin";
import ModifProduit from "./pages/ModifProduit";
import Advices from "./pages/Advices";
import AboutMe from "./pages/AboutMe";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/productAll",
        element: <AllProduits />,
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/commande",
        element: <Commande />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/loginUser",
        element: <LoginUser />,
      },
      {
        path: "/dashboard",
        element: <DashboardAdmin />,
      },
      {
        path: "/modification",
        element: <ModifProduit />,
      },
      {
        path: "/advices",
        element: <Advices />,
      },
      {
        path: "/aboutMe",
        element: <AboutMe />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
