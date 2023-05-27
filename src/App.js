import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductLayout from './components/products/ProductLayout';
import ProductHome from './components/products/productHome/ProductHome';
import DemoComp from './components/DemoComp'
import PageNotFound from './components/shared/PageNotFound';
import Signup from './components/auth/Signup';
import LoginForm from './components/auth/LoginForm';

const routes = createBrowserRouter([
  { 
    path: '/',
    element: <ProductLayout></ProductLayout>,
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
        path: 'democomp', element: <DemoComp></DemoComp>
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
