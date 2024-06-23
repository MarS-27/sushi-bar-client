import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Promotions from '../pages/Promotions';
import DeliveryAndPayment from '../pages/DeliveryAndPayment';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Products from '../pages/Products';
import Product from '../pages/Product';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'promotions',
        element: <Promotions />,
      },
      {
        path: 'delivery-payment',
        element: <DeliveryAndPayment />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'products/:category',
        element: <Products />,
        children: [
          {
            path: '/:productId',
            element: <Product />,
          },
        ],
      },
    ],
  },
]);
