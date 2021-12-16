import React from 'react';
import Category from '../../Category';
import FlexTuto from '../../Components/FlexTuto';
import NavLeftLayout from '../../Components/Layouts/NavLeftLayout';
import Products from '../../Products';

export type RouteType = {
    name: string,
    path: string,
    exact: boolean,
    children: JSX.Element,
};

const routes: RouteType[] = [
    {
        name: 'Flex-Tuto',
        path: '/admin/',
        exact: true,
        children: <FlexTuto />,
    },
    {
        name: 'Categories',
        exact: false,
        path: '/admin/categories',
        children: <Category />,
    },
    {
        name: 'Produits',
        path: '/admin/products',
        exact: false,
        children: <Products />,
    },
];

const AdminPage = (): JSX.Element => (
    <NavLeftLayout routes={routes} />
);

export default AdminPage;
