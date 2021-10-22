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
        component: DashboardComponent,
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
