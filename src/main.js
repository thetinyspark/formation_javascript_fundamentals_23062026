class Product{
    constructor(param_name, param_price){
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
        // TP n°15
        // faites-en sorte de supprimer le produit 
        // passé en paramètre au sein du tableau de produits
    }
}



const chaussettes = new Product("chaussettes", 100);

const priceHT = chaussettes.getPriceHT();
const priceTTC = chaussettes.getPriceTTC();
// const coupon = chaussettes.getPriceTTCMinusCoupon();

console.log(coupon);