import HomeComponent from "../components/home";
import DashboardComponent from "../components/dashboard";
import LoginApp from "../components/login";

const routes = [
    {
        exact: true,
        path: '/',
        component: LoginApp
    },
    {
        exact: true,
        path: '/home',
        component: HomeComponent,
        routes: [
            {
                exact: true,
                path: '/home',
                strict: true,
                component: DashboardComponent,
            }
        ]
    }
];

export default routes;
