//  composants qui retournent  le prix du produit. ( Price.js)

import React from 'react';

//Importez l'objet JSON créé précédemment
import product from './product'

// composant prix
const price =() =>{
    return <p>Prix: {product.price} CFA</p>;
};

// Exportez le composant
export default price;