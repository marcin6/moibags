import React from 'react';
import { bagslist } from '../bags/bagslist';
import { Link } from 'react-router-dom';
import '../assets/sass/products.sass';

export default function Product() {
    const bagsIndex = bagslist.findIndex((obj) => obj.id === "bags");
    
    return (
        <div className="product" >
            {bagslist[bagsIndex].bag.map(product => {
                return (
                    <div
                        key={product.id}
                        className="product__element">
                        <Link to={`/torebki/${product.id}`}>
                            <img src={product.src} alt="" />
                            <p>{product.title}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}
