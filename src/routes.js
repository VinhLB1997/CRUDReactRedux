import React from 'react';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/404";
import ProductPage from './pages/ProductPage'
import Add from './components/Product/Add'
import Update from './components/Product/Update'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/product',
        exact: true,
        main: () => <ProductPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <Add history={history} />
    },
    {
        path: '/product/update/:id',
        exact: false,
        main: ({ match, history }) => <Update match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;