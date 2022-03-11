class Tshirt {
constructor(nom, couleur, taille, image ){
    this.nom = nom
    this.couleur = couleur
    this.taille = taille
    this.image = image
    }

}

let tshirt = []
tshirt.push(new Tshirt('Tshirt Rouge', 'red', 'XL', 'https://cdn.manelli.com/12941-thickbox_default/tee-shirt-de-travail-coton-homme-rouge-toptex.jpg'));
tshirt.push(new Tshirt('Tshirt Blue', 'blue', 'L', 'https://cdn.shopify.com/s/files/1/1861/4661/products/6077PETROLE030_608x608.jpg?v=1620461149'));
tshirt.push(new Tshirt('Tshirt Vert', 'green', 'XS', 'https://wordans-a1a5.kxcdn.com/files/model_specifications/2011/6/29/6835/6835_big.jpg?1632939495'));


let size = new Set();
for(let t of tshirt){
    size.add(t.taille)
}
let color = new Set();
for(let c of tshirt){
    color.add(c.couleur)
}


function filtreTaille(tableDeTshirt, taille){
    return tableDeTshirt.filter(t => t.taille === taille)
}

function filtreCouleur(tableDeTshirt, couleur) {
    return tableDeTshirt.filter(c => c.couleur === couleur)
}


