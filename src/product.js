
//   fichier  product.js contenant le nom d'un produit, son prix, sa description et un chemin ou une URL vers une image. 

import garba from './garba.jpg'
 const product = {
    name: 'le garba',
    price: 1000 ,
    description: "Le garba est un plat populaire ivoirien à base de semoule de manioc, appelée attiéké, accompagnée de thon, essentiellement vendu dans de petites échoppes de rue généralement tenues par des hommes haoussa.",
    image: garba,
 }

// exporter l'objet JSON
export default product;
