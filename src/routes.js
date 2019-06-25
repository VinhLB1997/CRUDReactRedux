import React from 'react';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/404";
import ProductPage from './pages/ProductPage'
import Add from './components/Product/Add'

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
        main: () => <Add />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;