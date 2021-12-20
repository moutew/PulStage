import './index.scss';
import React from "react";
import { Link } from 'react-router-dom';

const MenuAdminSidebar = (): JSX.Element => (
    <div className="MenuAdminSidebar">
        <Link className="MenuAdminSidebar-menuItem" to="/admin/categories">Categories</Link>
        <Link className="MenuAdminSidebar-menuItem" to="/admin/products">Products</Link>
        <Link className="MenuAdminSidebar-menuItem" to="/admin/flow">DamnedFlow</Link>
    </div>
);

export default MenuAdminSidebar;
