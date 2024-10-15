import React, {FC} from 'react';
import {productsObject} from "../../data";
import {IProductModel} from "../models/IProductModel";
import Product from "../product/Product";
import "./Products.css"


const Products: FC = () => {
    const products: IProductModel[] = productsObject.products;
    return (
        <>
            <h1>Products</h1>
            <div className="products-container">
                {
                    products.map((product: IProductModel) => (<Product key={product.id} item = {product}/>))
                }
            </div>
        </>
    );
};

export default Products;