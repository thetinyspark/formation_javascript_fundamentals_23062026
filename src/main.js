function displayProfile(age, nom, prenom, sex, taste){
    return `
    <ul>
        <li>Nom: ${nom}</li>
        <li>Prénom: ${prenom}</li>
        <li>Âge: ${age}</li>
        <li>Sexe: ${sex}</li>
        <li>Parfum de glace préféré: ${taste}</li>
    </ul>
    `;
}
function onPageStarted(){

    const profile1 = displayProfile(40,"Legrand", "Nicolas","Homme","Noix de coco");
    const profile2 = displayProfile(28,"Cuvilliers", "Matthieu","Homme","Pistache");
    
    const body = document.querySelector("body");

    // Créer un HTMLNode / balise 
    const container = document.createElement("div");

    // ajoute la balise / HTMLNode comme enfant de body
    body.appendChild(container);

}

// lance la fonction onPageStarted quand le document (page web)
// et tous les documents associés (image, sons, vidéos etc ...)
// sont téléchargés, évalués par le navigateur et disponible 
// à l'édition / manipulation
window.onload = onPageStarted;