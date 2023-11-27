import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdicaoRefPage from "./pages/AdicaoRefPage";
import EdicaoRefPage from "./pages/EdicaoRefPage";

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
       <AdicaoRefPage/>
      </>
    )
  },
  {
    path: '/edit',
    element: (
      <>
         <EdicaoRefPage/>
      </>
    )
  },
])


function App() {
  return (
    <>
     <RouterProvider router={rotas}/>
     </>
 
   
  );
}

export default App;
