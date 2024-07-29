import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './features/cart/Cart';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import CreateOrder, {
	action as createOrderAction,
} from './features/order/CreateOrder';
import OrderDetails, {
	loader as orderLoader,
} from './features/order/OrderDetails';
import Orders, { loader as ordersLoader } from './features/order/Orders';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{
				path: '/menu',
				element: <Menu />,
				loader: menuLoader,
				children: [
					{ index: true, element: <Cart /> },
					{
						path: 'new-order',
						element: <CreateOrder />,
						action: createOrderAction,
					},
				],
			},
			{
				path: '/orders',
				element: <Orders />,
				loader: ordersLoader,
				children: [
					{
						index: true,
						element: (
							<div className='text-xl flex justify-center items-center h-full'>
								Select order
							</div>
						),
					},
					{ path: ':orderID', element: <OrderDetails />, loader: orderLoader },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
