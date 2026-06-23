function displayProduct(container, product){
    container.innerHTML = `
    Nom: ${product.name} <br />
    Prix: ${product.price}€ <br />
    Stock: ${product.stock} <br />
    `;
}

function onPageStarted(){
    const product = {
        name: "Steam Machine", 
        price: 1039, 
        stock: 1000000
    }; 

    const container = document.querySelector("#product1");

    displayProduct(container, product);
}

window.onload = onPageStarted;