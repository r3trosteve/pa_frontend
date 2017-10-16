import HomePage from './components/home/HomePage';
import RatesPage from './components/rates/RatesPage';
import ParkingLotPage from './components/parking-lot/ParkingLotPage';
import CheckoutPage from './components/checkout/CheckoutPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
	},
	{
		path: '/home',
		component: HomePage
	},
	{
		path: '/rates/search/:id',
		component: RatesPage
	},
	{
		path: '/parking-lot',
		component: ParkingLotPage
	},
	{
		path: '/checkout',
		component: CheckoutPage
	}
];

export default routes;