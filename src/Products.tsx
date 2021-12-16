/* eslint-disable @typescript-eslint/quotes */
import React from "react";
import { RouteComponentProps } from 'react-router';
import { Link, Route, useRouteMatch } from "react-router-dom";
import Product from "./Product";

type ProductType = {
    id: number,
    name: string,
    description: string,
    status: string,
};

const productData: ProductType[] = [
    {
        id: 1,
        name: "NIKE Liteforce Blue Sneakers",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
        status: "Available",
    },
    {
        id: 2,
        name: "Stylised Flip Flops and Slippers",
        description:
            "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
        status: "Out of Stock",
    },
    {
        id: 3,
        name: "ADIDAS Adispree Running Shoes",
        description:
            "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
        status: "Available",
    },
    {
        id: 4,
        name: "ADIDAS Mid Sneakers",
        description:
            "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
        status: "Out of Stock",
    },
];

const Products = ({ match }: { match?: RouteComponentProps }): JSX.Element => {
    // const productData = [ ... ];
    const { url } = useRouteMatch();

    /* Create an array of `<li>` items for each product */
    const linkList = productData.map((product: ProductType) => (
        <li key={product.id}>
            <Link to={`${url}/${product.id}`}>{product.name}</Link>
        </li>
    ));

    return (
        <div>
            <div>
                <div>
                    <h3>Products</h3>
                    <ul>{linkList}</ul>
                </div>
            </div>

            <Route path={`${url}/:productId`}>
                <Product data={productData} />
            </Route>
            <Route exact path={url}>
                <p>Please select a product.</p>
            </Route>
        </div>
    );
};

export default Products;
