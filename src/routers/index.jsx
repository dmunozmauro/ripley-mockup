import LoginApp from "../components/login";
import HomeComponent from "../components/home";
import DashboardComponent from "../components/dashboard";
import ReportsAccountingComponent from "../components/reports/reports_accounting";
import ReportsLogsComponent from "../components/reports/reports_logs";
import ReportsQuadratureComponent from "../components/reports/reports_quadrature";
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
                path: '/home/reports/accounting',
                strict: true,
                component: ReportsAccountingComponent
            },
            {
                exact: true,
                path: '/home/reports/logs',
                strict: true,
                component: ReportsLogsComponent
            },
            {
                exact: true,
                path: '/home/reports/quadrature',
                strict: true,
                component: ReportsQuadratureComponent
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
