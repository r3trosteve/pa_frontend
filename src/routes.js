import HomePage from './components/home/HomePage';
import RatesPage from './components/rates/RatesPage';
import ParkingLotPage from './components/parking-lot/ParkingLotPage';
import ParkingLotPage2 from './components/parking-lot/ParkingLotPage2';
import CheckoutPage from './components/checkout/CheckoutPage';
import ProfilePage from './components/profile/ProfilePage';
import NotFoundPage from './components/notofund/NotFoundPage';
import NewPasswordPage from './components/profile/NewPasswordPage';
import AirportPage from './components/airport/AirportPage';
import AirportsPage from './components/airports/AirportsPage';
import ReservatinPage from './components/reservation/ResrvationPage';

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
        path: /\/lot-.*/,
        exact: true,
        component: ParkingLotPage2
    },
	{
		path: '/checkout/:id',
		component: CheckoutPage
	},
	{
		path: '/profile',
		component: ProfilePage
	},
	{
		path: '/new-password',
		component: NewPasswordPage
	},
    {
        path: '/airports',
        component: AirportsPage
    },
    {
        path: /.*-airport$/,
        exact: true,
        component: AirportPage
    },
	{
		path: '/reservation',
		component: ReservatinPage
	},
    {
        path: '*',
        component: NotFoundPage
    }
];

export default routes;
