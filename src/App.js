import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
//import About from "./components/About.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js"
import RestaurantMenu from "./components/RestaurantMenu.js"
//I will import this grocery using LAZY LOADING
//Because when home page will load , it wont load the code for grocery
//only when I go to grocery page , it will load that grocery component code base
// also known as code splitting, chunking , dynamic bundling , on demand bundling , lazy loading
//import Grocery from "./components/Grocery.js"

//lazy loading
//lazy comes react package , comes as a named export
//we use suspense component , to handle late loading of lazy files - aysnchronous files
// and you can wrap your component in suspence
const Grocery = lazy(() =>
  //this import is a function and will take the path of grocery component
  // a different js file become as a bundle version in network tab and dist

  import("./components/Grocery.js"),
)

const About = lazy(() => import("./components/About.js"))

//build the top level component first
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

// we need to create a routing configuration , for routing to happen at the root level react code
// this configuration is aan information that will tell a browser router , that what will happen on a specific path
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // Dynamic nature is given using : in the path
        //this :redid eg /123 , it is a dynamic id , whenever I change this path this age should change
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        //usage of suspence on top of component , now we need fallback for example an loaded , something to present on the screen meanwhile render happens
        //pass in jsx on the fallback eg shimmer or any component
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
