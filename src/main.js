// ici on décrit un modèle de conception pour un type de donnée
// personnalisé qui répond au nom de Heroe. 

// Ce modèle de conception est nommé une "classe" (rien à voir avec les classes CSS)
// À chaque fois que l'on souhaite fabriquer un nouveau Heroe, ce modèle, cette classe
// est utilisé pour construire le nouveau heroe, c'est un peu comme un plan IKEA

// la classe, c'est plan, le modèle, le héros, c'est le produit
class Heroe{
    constructor(power, costume){
        this.power = power; 
        this.costume = costume;
    }

    fightTheCrime(){
        // tabasse les méchants, sauve les animaux et les enfants, pose pour la photo
    }
}

class Car{
    constructor(param_marque, param_couleur, param_prix){
        this.brand = param_marque; 
        this.color = param_couleur; 
        this.price = param_prix; 
    }

    move(){
        console.log("vroum");
    }
}

// mage et conan sont des objets de type Heroe
// construits à partir de la classe Heroe
// on dit aussi que ce sont des instances de Heroe
const mage = new Heroe("Faire de la magie", "Robe");
const conan = new Heroe("Taper","Tout nu");

const flashMcQueen = new Car("Ferrari","rouge",500000); 
flashMcQueen.move();

// Javascript, même s'il introduit des éléments de langage orienté objet par classe 
// est un langage orienté objet par prototypage, çàd, que ses propriétés et méthodes/fonctionnalités
// peuvent être supprimées, redéfinies, ajoutées à n'importe quel moment. 
// Le langage est extrêmement souple, mais la rapidité d'éxécution en pâtit. 
flashMcQueen.introduceItSelf = function(){

};

