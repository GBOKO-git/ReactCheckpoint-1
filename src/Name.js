//  composants qui retournent le nom du produit. (Name.js)

import React from 'react';

//Importez l'objet JSON créé précédemment
import product from './product'

// composant nom
const Name = () =>{
    return <p>Nom: {product.name}</p>;
};

// Exportez le composant
export default Name;