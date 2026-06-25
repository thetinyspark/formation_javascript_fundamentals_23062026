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
        this.load();
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
        this.save();
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
        ); 

        this.save();
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

    save(){
        localStorage.setItem("cart", JSON.stringify(this.getProducts()));
    }

    load(){
        // si getItem renvoie null ou undefined alors la valeur de data
        // correspond à une chaîne de caractères au format JSON qui symbolise un tableau vide.
        const data = localStorage.getItem("cart") || '[]';
        const infos = JSON.parse(data);
        infos.forEach( 
            (currentInfo)=>{
                this.products.push(new Product(currentInfo.id, currentInfo.name, currentInfo.price));
            }
        );
    }
}

// VisualCart reprend toutes les fonctionnalités de Cart
class VisualCart extends Cart{
    constructor(param_container){
        super();
        this.container = param_container;
        this.init();
    }

    init(){
        // attrape tous les clicks des balises contenues au sein de body
        this.container.addEventListener("click", this.clickHandler, true);
    }

    render(){
        // on nettoie le body
        this.container.innerHTML = "";

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
            this.container.appendChild(div);
        }

        const total = document.createElement("div");
        total.innerHTML = `
        <p>Total HT: ${this.getTotalHT()}€</p>
        <p>Total TTC: ${this.getTotalTTC()}€</p>
        `;

        this.container.appendChild(total);
    }

    // une fonction fléchée garde toujours le bon contexte d'éxécution this
    clickHandler = (event)=>{
        // si la target possède un identifiant
        if( event.target.id ){
            // si cet identifiant contient la sous chaîne de caractères product_
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


var panier = null;

function addToCart(){
    // on veut créer un nouveau produit on doit donc récupérer les valeurs contenues 
    // dans les champs de formulaire. 

    // ici on récupère l'id du nouveau produit
    const id = document.getElementById("productId").value;

    // ici on récupère le nom du nouveau produit
    const name = document.getElementById("productName").value;

    // ici on récupère le prix du nouveau produit
    const price = document.getElementById("productPrice").value;

    // et enfin on crée le nouveau produit à partir des informations 
    // récupérées puis on l'ajoute au panier. 
    const product = new Product( 
        parseInt(id),
        name,
        parseFloat(price)
    ); 
    panier.addProduct(product);
}

function start(){
    window.removeEventListener("load",start);
    panier = new VisualCart(document.querySelector("#cart"));
    panier.render();
    const btn = document.getElementById("createProductBtn"); 
    btn.addEventListener("click",addToCart);
}

window.addEventListener("load",start);