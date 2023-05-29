// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductLayout from './components/products/ProductLayout';
import ProductHome from './components/products/product-home/ProductHome';
import DemoComp from './components/DemoComp'
import PageNotFound from './components/shared/PageNotFound';
import Signup from './components/auth/Signup';
import LoginForm from './components/auth/LoginForm';
import AddProduct from './components/products/create-product/AddProduct';

const routes = createBrowserRouter([
  { 
    path: '/',
    element: <ProductLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        // path: '', element: <ProductHome></ProductHome>
        index: true, element: <ProductHome></ProductHome>
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'democomp', element: <DemoComp />
      },
      {
        path: 'addproduct', element: <AddProduct />
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
