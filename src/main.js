function addition( a, b ){
    return a + b;
}

function onPageStarted(){
    console.log( addition(10,5));
}

// lance la fonction onPageStarted quand le document (page web)
// et tous les documents associés (image, sons, vidéos etc ...)
// sont téléchargés, évalués par le navigateur et disponible 
// à l'édition / manipulation
window.onload = onPageStarted;