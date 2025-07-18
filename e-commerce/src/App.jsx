import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Component/NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Component/HomePage/Home";
import Cart from "./Component/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <div className="h-[100vh] flex">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
