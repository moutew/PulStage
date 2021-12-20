import React from 'react';
import Category from '../../Category';
import FlexTuto from '../../Components/FlexTuto';
import Products from '../../Products';
import NavLeftLayout from '../../Components/Layouts/NavLeftLayout';
import type { RouteProps } from 'react-router-dom';

export type RouteType = RouteProps & {
    name: string,
    to: string,
};

const routes: RouteType[] = [
    {
        name: 'Flex-Tuto',
        path: '/admin/',
        to: '/admin/',
        exact: true,
        component: FlexTuto,
    },
    {
        name: 'Categories',
        exact: false,
        path: '/admin/categories',
        to: '/admin/categories',
        component: Category,
    },
    {
        name: 'Produits',
        path: '/admin/products',
        to: '/admin/products',
        exact: false,
        component: Products,
    },
];

const AdminPage = (): JSX.Element => (
    <NavLeftLayout routes={routes} />
);

export default AdminPage;
