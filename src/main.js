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

    removeProductById(id){

        /*solution avec filter */
        this.products = this.products.filter( 
            // fonction fléchée
            (currentProduct)=>{
                if( currentProduct.id == id)
                    return false;
                
                return true;
            }
        )
    
    }
}

// VisualCart reprend toutes les fonctionnalités de Cart
class VisualCart extends Cart{
    constructor(){
        super();
        this.init();
    }

    init(){
        // attrape tous les clicks des balises contenues au sein de body
        document.body.addEventListener("click", this.clickHandler, true);
    }

    render(){
        // on nettoie le body
        document.body.innerHTML = "";

        // puis on boucle sur l'ensemble des produits
        const products = this.getProducts(); 
        for( let i = 0; i < products.length; i++){

            // on crée une div
            const currentProduct = products[i];
            const div = document.createElement("div"); 

            // on ajoute les informations du produit à la div
            div.innerHTML = `
                <h2>${currentProduct.name}</h2>
                <p>Price: ${currentProduct.price}</p>
                <button id="product_${currentProduct.id}">X</button>
            `;

            // on ajoute la classe CSS "product" à notre div
            div.setAttribute("class","product");

            // puis on ajoute la div à <body>
            document.body.appendChild(div);
        }

        const total = document.createElement("div");
        total.innerHTML = `
        <p>Total HT: ${this.getTotalHT()}€</p>
        <p>Total TTC: ${this.getTotalTTC()}€</p>
        `;

        document.body.appendChild(total);
    }

    // une fonction fléchée garde toujours le bon contexte d'éxécution this
    clickHandler = (event)=>{
        // si la target possède un identifiant
        if( event.target.id ){
            // si cet identifiant contient le sous chaîne de caractère product_
            if( event.target.id.includes("product_")){
                // alors on enlève la sous chaîne de l'id et on transforme le résultat en entier
                const id = parseInt( event.target.id.replace("product_","") );

                // ainsi on récupère l'identifiant du produit à supprimer
                this.removeProductById(id);
            }
        }
    };

    // réécrire addProduct
    addProduct(product){
        // ici on réutilise le code de la classe Cart 
        // pour continuer de bénéficer de ses fonctionnalités
        super.addProduct(product);

        // et on ajoute notre comportement spécifique à VisualCart ici
        this.render();
    }

    // réécrire addProduct
    removeProduct(product){
        // ici on réutilise le code de la classe Cart 
        // pour continuer de bénéficer de ses fonctionnalités
        super.removeProduct(product);

        // et on ajoute notre comportement spécifique à VisualCart ici
        this.render();
    }

    // réécrire addProduct
    removeProductById(id){
        super.removeProductById(id);
        this.render();
    }
}



function start(){
    window.removeEventListener("load",start);
    const product1 = new Product(1,"Clair Obscur Expedition 33", 20);
    const product2 = new Product(2,"Zelda Ocarina Of Time", 50);
    const product3 = new Product(3,"Zelda Wind Waker", 30);
    
    const panier = new VisualCart();
    
    panier.addProduct(product1);
    panier.addProduct(product2);
    panier.addProduct(product3);
    panier.removeProduct(product2);
}

window.addEventListener("load",start);