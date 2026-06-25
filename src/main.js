class Product{
    constructor(param_id, param_name, param_price){
        this.id = param_id;
        this.name = param_name;
        this.price = param_price;
    }

    getPriceHT(){
        return this.price;
    }

    getPriceTTC(param_tva = 20){
        return this.price + ( this.price / 100 * param_tva );
    }
}


class Cart{
    constructor(){
        this.products = [];
    }

    getTotalTTC(param_tva=20){
        // je déclare une variable nommée total
        let total = 0;

        // pour chaque produit au sein du tableau de produits ...
        this.products.forEach(

            // j'éxécute la fonction suivante qui s'applique à chaque produit
            (currentProduct)=>{

                // j'ajoute à la variable nommée total, le prix TTC de mon produit en cours
                total += currentProduct.getPriceTTC(param_tva);
            }
        );

        // retourne le résultat
        return total;
    }

    getTotalHT(){
        // je déclare une variable nommée total
        let total = 0;

        // pour chaque produit au sein du tableau de produits ...
        this.products.forEach(

            // j'éxécute la fonction suivante qui s'applique à chaque produit
            (currentProduct)=>{

                // j'ajoute à la variable nommée total, le prix HT de mon produit en cours
                total += currentProduct.getPriceHT();
            }
        );

        // retourne le résultat
        return total;
    }

    addProduct(product){
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }

    removeProduct(product){

        /*solution avec indexOf */ 
        // const position = this.products.indexOf(product);
        // if( position > -1)
        //     this.products.splice(position, 1);

        /*solution avec filter */
        this.products = this.products.filter( 
            // fonction fléchée
            (currentProduct)=>{
                if( currentProduct.id == product.id)
                    return false;
                
                return true;
            }
        )
    
    }
}

const product1 = new Product(1,"Clair Obscur Expedition 33", 20);
const product2 = new Product(2,"Zelda Ocarina Of Time", 50);
const product3 = new Product(3,"Zelda Wind Waker", 30);

const panier = new Cart();

panier.addProduct(product1);
panier.addProduct(product2);
panier.addProduct(product3);


panier.removeProduct(product2);
console.log(panier.getProducts());

console.log(panier.getProducts());
console.log(panier.getTotalHT());
console.log(panier.getTotalTTC(10));