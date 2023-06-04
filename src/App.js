// import logo from './logo.svg';
import './App.css';
import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductLayout from './components/products/ProductLayout';
import ProductHome from './components/products/product-home/ProductHome';
// import PageNotFound from './components/shared/PageNotFound';
// import DemoComp from './components/DemoComp'
// import Signup from './components/auth/Signup';
// import LoginForm from './components/auth/LoginForm';
import { action as loginFormAction } from './components/auth/LoginForm';
// import AddProduct from './components/products/create-product/AddProduct';

const PageNotFound = lazy(() => import('./components/shared/PageNotFound'));
const DemoComp = lazy(() => import('./components/DemoComp'));
const Signup = lazy(() => import('./components/auth/Signup'));
const LoginForm = lazy(() => import('./components/auth/LoginForm'));
const AddProduct = lazy(() => import('./components/products/create-product/AddProduct'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductLayout />,
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <PageNotFound />
      </Suspense>
    ),
    children: [
      {
        // path: '', element: <ProductHome></ProductHome>
        index: true,
        element: <ProductHome />
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Signup />
          </Suspense>
        )
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <LoginForm />
          </Suspense>
        ),
        action: loginFormAction
      },
      {
        path: 'democomp',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <DemoComp />
          </Suspense>
        )
      },
      {
        path: 'addproduct',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AddProduct />
          </Suspense>
        )
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
