import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";



const App = () =>(
       <div className="app">
        <Header/>
        <Body/>
       </div>
)
let appRouter = createBrowserRouter([
       {
              path : "/",
              element : <App/>,
              errorElement : <Error/>

       },
       {
              path : "/about",
              element : <About/>

       },
       {
              path : "/contact",
              element : <Contact/>
       }
])


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
