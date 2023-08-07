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
import EditProduct from './components/products/edit-product/EditProduct';
import Loader from './components/shared/Loader';
import Protected from './components/auth/auth-util/protected';
// import { loader as productsLoader } from './components/products/list-product/ListProduct';
// import AddProduct from './components/products/create-product/AddProduct';

const PageNotFound = lazy(() => import('./components/shared/PageNotFound'));
const DemoComp = lazy(() => import('./components/DemoComp'));
const Signup = lazy(() => import('./components/auth/Signup'));
const LoginForm = lazy(() => import('./components/auth/LoginForm'));
const AddProduct = lazy(() => import('./components/products/create-product/AddProduct'));
const ListProduct = lazy(() => import('./components/products/list-product/ListProduct'));
const CounterComp = lazy(() => import('./components/counter/CounterComp'))


const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductLayout />,
    errorElement: (
      <Suspense fallback={<Loader />}>
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
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        )
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<Loader />}>
            <LoginForm />
          </Suspense>
        ),
        action: loginFormAction
      },
      {
        path: 'democomp',
        element: (
          <Suspense fallback={<Loader />}>
            <DemoComp />
          </Suspense>
        )
      },
      {
        path: 'products/add',
        element: (
          <Suspense fallback={<Loader />}>
            <Protected CustomComponent={AddProduct} />
          </Suspense>
        )
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<Loader />}>
            <ListProduct />
            {/* <Protected CustomComponent={ListProduct} /> */}
          </Suspense>
        ),
        // loader: productsLoader
        // loader: () => import('./pages/Blog').then((module) => module.loader()),
      },
      {
        path: 'products/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <Protected CustomComponent={EditProduct} />
          </Suspense>
        )
      },
      {
        path: 'counter',
        element: (
          <Suspense fallback={<Loader />}>
            <CounterComp />
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
