import React from 'react';
import BlackLogo from "./BlackLogo";
import {useParams} from "react-router-dom"
import { bagslist } from '../bags/bagslist';
import '../assets/sass/products.sass';

export default function ProductDetails() {
    const {productId} = useParams();
    const bagsIndex = bagslist.findIndex((obj) => obj.id === "bags");
    const thisProduct = bagslist[bagsIndex].bag.find(prod => prod.id == productId);

    return (
        <div className="product_details">
            <BlackLogo />
            <div className="product_details__container">
            <img src={thisProduct.src} alt="" />
            <h3>{thisProduct.title}</h3>
            <p>Wymiary dla rozmiaru {thisProduct.size}</p>
            <p><b>Cena: {thisProduct.price}</b></p>
            <p>{thisProduct.description}</p>
            <p>{thisProduct.additional}</p>
            </div>
        </div>
    )
}