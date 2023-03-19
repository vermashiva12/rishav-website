import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Services_a from './pages/services_a';
import ServicesB from './pages/servicesB';
import Custom from './pages/Custom';
import ErrorPage from './pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    
   

},

{
  path: "services/showerdoor",
  element: <Services_a />,
  errorElement: <ErrorPage />
},
{
path: "services/glassrailing",
element: <ServicesB />,
errorElement: <ErrorPage />
},
{
path: "services/custom",
element: <Custom />,
errorElement: <ErrorPage />
},

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

