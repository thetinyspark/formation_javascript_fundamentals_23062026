function displayProfile(container, age, nom, prenom, sex, taste){
    container.innerHTML = `
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
    // on deux divs à l'aide de la programmation
    const container1 = document.createElement("div");
    const container2 = document.createElement("div");

    // on les envoie à une fonction avec d'autres informations
    // la fonction va créer le html contenu dans les divs
    const profile1 = displayProfile(container1,40,"Legrand", "Nicolas","Homme","Noix de coco");
    const profile2 = displayProfile(container2,28,"Cuvilliers", "Matthieu","Homme","Pistache");
    
    // on va chercher la balise body
    const body = document.querySelector("body");

    // puis on ajoute les deux divs à body
    body.appendChild(container1);
    body.appendChild(container2);
}

// lance la fonction onPageStarted quand le document (page web)
// et tous les documents associés (image, sons, vidéos etc ...)
// sont téléchargés, évalués par le navigateur et disponible 
// à l'édition / manipulation
window.onload = onPageStarted;