import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product } from './pages/Product';
import { Layout } from './Layouts/Layout';
import { ErrorPage } from './pages/Error';
import { Politic } from './pages/Politic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,        
    children: [
      {
        path: "/",
        element: <Home />
      },
    
      {
        path: "/product/:id",
        element: <Product />
      }
    ],
    errorElement: <ErrorPage />
  },

  {
    path: "/politic",
    element: <Politic />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);