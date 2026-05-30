import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestuarantMenu";
import { Provider } from "react-redux";

import { lazy,Suspense } from "react";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(()=>import("./components/Grocery"))
const App = () => (
  <Provider store={appStore}>
<div className="app">
    <Header />
    <Outlet />
  </div>
  </Provider>
  
);

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
       path : "/restaurants/:id",
       element : <RestaurantMenu/>
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<>loading</>}><Grocery/></Suspense>
      },
      {
        path : "/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
