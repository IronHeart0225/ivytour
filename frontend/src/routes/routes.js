import HomeScreen from "../pages/home/HomeScreen";
import LoginScreen from "../pages/login/LoginScreen";

const frontRoutes = [
  { path: '/', component: HomeScreen, exact: true },
  { path: '/login', component: LoginScreen, exact: true },
];

export { frontRoutes };
