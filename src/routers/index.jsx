import LoginApp from "../components/login";
import HomeComponent from "../components/home";
import DashboardComponent from "../components/dashboard";
import ReportsComponent from "../components/reports";
import AccountEntriesComponent from "../components/accountEntries";

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
            },
            {
                exact: true,
                path: '/home/reports',
                strict: true,
                component: ReportsComponent
            },
            {
                exact: true,
                path: '/home/accountentries',
                strict: true,
                component: AccountEntriesComponent
            },
        ]
    }
];

export default routes;
