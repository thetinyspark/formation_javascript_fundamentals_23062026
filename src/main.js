function addition( a, b ){
    return a + b;
}

function multiplication( a, b ){
    return a * b;
}

function division( a, b ){
    if( b == 0)
        return 0;
    return a / b;
}

function soustraction( a, b ){
    return a - b;
}

function onPageStarted(){
    // const resultatElement = document.getElementById("resultat");
    const resultatElement = document.querySelector("#resultat");
    const resultat = addition(10,5); 
    resultatElement.innerHTML = resultat;
}

// lance la fonction onPageStarted quand le document (page web)
// et tous les documents associés (image, sons, vidéos etc ...)
// sont téléchargés, évalués par le navigateur et disponible 
// à l'édition / manipulation
window.onload = onPageStarted;