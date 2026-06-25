class Product{
    constructor(param_id, param_name, param_price){
        this.id = param_id;
        this.name = param_name;
        this.price = param_price;
    }

    getPriceHT(){
        return this.price;
    }

    // on peut donner à un paramètre une valeur par défaut
    // toutefois tous les paramètres qui le suivront devront
    // eux aussi avoir une valeur par défaut
    getPriceTTC(param_tva = 20){
        return this.price + ( this.price / 100 * param_tva );
    }

    getPriceTTCMinusCoupon(coupon, param_tva = 20){
        return (this.price + ( this.price / 100 * param_tva ))-coupon;
    }
}


class Cart{
    constructor(){
        this.products = [];
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

const product1 = new Product(1,"Clair Obscur Expedition 33", 19.99);
const product2 = new Product(2,"Zelda Ocarina Of Time", 49.99);
const product3 = new Product(3,"Zelda Wind Waker", 29.99);

const panier = new Cart();

panier.addProduct(product1);
panier.addProduct(product1);
panier.addProduct(product2);
panier.addProduct(product2);
panier.addProduct(product3);
panier.addProduct(product3);

console.log(panier.getProducts());

panier.removeProduct(product2);

console.log(panier.getProducts());