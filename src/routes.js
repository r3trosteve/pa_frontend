import HomePage from './components/home/HomePage';
import RatesPage from './components/rates/RatesPage';
import ParkingLotPage from './components/parking-lot/ParkingLotPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import ProfilePage from './components/profile/ProfilePage';
import NotFoundPage from './components/notofund/NotFoundPage';
import NewPasswordPage from './components/profile/NewPasswordPage';

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
		path: '/airport-parking/rates/:id',
		component: ParkingLotPage
	},
	{
		path: '/checkout',
		component: CheckoutPage
	},
	{
		path: '/profile',
		component: ProfilePage
	},
	// {
	// 	path: '*',
	// 	component: NotFoundPage
	// },
	{
		path: '/new-password',
		component: NewPasswordPage
	}
];

export default routes;
