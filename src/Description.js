// composants qui retournent la description du produit. (Description.js)

import React from 'react';

//Importez l'objet JSON créé précédemment
import product from './product'

// composant description
const Description = () =>{
    return <p>Description: {product.description}</p>;
};

// Exportez le composant
export default Description;