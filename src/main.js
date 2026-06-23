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
    const resultat1 = addition(10,5); // 15
    const resultat2 = soustraction(10,5); // 5
    const resultat3 = multiplication(10,5);  // 50
    const resultat4 = division(10,5);  // 2
    resultatElement.innerHTML = `
        ${resultat1}
        ${resultat2}
        ${resultat3}
        ${resultat4}
    `; 
}

// lance la fonction onPageStarted quand le document (page web)
// et tous les documents associés (image, sons, vidéos etc ...)
// sont téléchargés, évalués par le navigateur et disponible 
// à l'édition / manipulation
window.onload = onPageStarted;