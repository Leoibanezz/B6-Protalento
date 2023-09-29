import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import { Navbar } from 'reactstrap';



const router = createBrowserRouter([
  {

  path: "/",
  element: <Navbar></Navbar>,
  children:[ {


  path: "about",
  element: <div>Pagina de informacion de la empresa</div>,

},
]
},

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>   
  </React.StrictMode>,
)
