function onPageStarted(){
    // l'appel à window.fetch permet d'aller chercher des données 
    // dans un fichier / une url distante

    // fetch renvoie un objet de type Promise, qui standardise la façon 
    // de récupérer des données de façon asynchrone (pas instantanée)
    // quand on obtient la réponse voulue alors la fonction contenue 
    // dans then est éxécutée, sinon la fonction contenue dans catch l'est
    window.fetch("./data/products.json").then(
        function(response){

            // ici on obtient une réponse mais elle a besoin 
            // d'être décryptée par le navigateur, on appelle 
            // la fonction response.json() qui prend un peu de temps
            // et qui nous renvoie la donnée lorsqu'elle est disponible
            // c'est aussi une promesse/promise.
            response.json().then(
                function(data){

                    // et là on a le contenu de notre fichier json
                    // (notre tableau de produits)
                    console.log(data);
                }
            )
        }
    ).catch(
        function(error){
            console.log(error);
        }
    );
}

window.onload = onPageStarted;

// installer node js sur sa machine à l'adresse https://nodejs.org/en
// ensuite, ouvrir une ligne de commande (il y en a dans vscode)
// et tapez la commande suivante 

// npm install -g http-server
