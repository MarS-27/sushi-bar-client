import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Promotions from '../pages/Promotions';
import DeliveryAndPayment from '../pages/DeliveryAndPayment';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Products from '../pages/Products';
import Product from '../pages/Product';
import App from '../App';
import { ROUTER_PATHS } from './routerPaths';

export const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.home,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTER_PATHS.promotions,
        element: <Promotions />,
      },
      {
        path: ROUTER_PATHS.delivery_payment,
        element: <DeliveryAndPayment />,
      },
      {
        path: ROUTER_PATHS.about,
        element: <About />,
      },
      {
        path: ROUTER_PATHS.contacts,
        element: <Contacts />,
      },
      {
        path: ROUTER_PATHS.products,
        element: <Products />,
        children: [
          {
            path: ROUTER_PATHS.product,
            element: <Product />,
          },
        ],
      },
    ],
  },
]);
