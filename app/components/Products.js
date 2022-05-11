import React from 'react';
import BlackLogo from "./BlackLogo";
import Product from "./Product";
import '../assets/sass/products.sass';

export default function Products() {
    return (
        <div className="products" >
            <BlackLogo />
            <div className="products__container">
                <Product/>
            </div>
        </div>
    );
}

