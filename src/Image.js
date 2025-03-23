//  composants qui retournent l'image du produit. (Name.js)

import React from 'react';
//Importez l'objet JSON créé précédemment
import product from './product';

// composant image
const Image = () => {
  return <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', borderRadius: '10px' }} />;
};

export default Image;
