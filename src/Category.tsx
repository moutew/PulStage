import React from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

type ItemType = {
    name?: string,
};

const Item = (): JSX.Element => {
    const { name } = useParams<ItemType>();

    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

const Category = (): JSX.Element => {
    const { url, path } = useRouteMatch();

    return (
        <div>
            <h1>Categ</h1>
            <ul>
                <li>
                    <Link to={`${url}/shoes`}>Shoes</Link>
                </li>
                <li>
                    <Link to={`${url}/boots`}>Boots</Link>
                </li>
                <li>
                    <Link to={`${url}/footwear`}>Footwear</Link>
                </li>
            </ul>
            <Route path={`${path}/:name`}>
                <Item />
            </Route>
        </div>
    );
};

export default Category;
