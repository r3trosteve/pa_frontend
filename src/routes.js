import HomePage from './components/home/HomePage';
import RatesPage from './components/rates/RatesPage';
import ParkingLotPage from './components/parking-lot/ParkingLotPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import ProfilePage from './components/profile/ProfilePage';
import NotFoundPage from './components/notofund/NotFoundPage';
import NewPasswordPage from './components/profile/NewPasswordPage';
import AirportPage from './components/airport/AirportPage';
import AirportsPage from './components/airports/AirportsPage';

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
		path: '/airport-parking/:id',
		component: ParkingLotPage
	},
	{
		path: '/reservation/:id',
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
	},
	{
		path: '/airport/:id',
		component: AirportPage
	},
    {
        path: '/airports',
        component: AirportsPage
    }
];

export default routes;
