// async function fetchCollection() {
//     const response = await fetch('assets/datas/collection.json');
//     const data =await response.json(); 


//     return data;
// }
// const collection = fetchCollection();


// tried to take datas for the Json file
fetch("assets/datas/collection.json")
    .then (response => response.json())
    .then(data =>{
        console.log(data.pizzas)
        
    })


    //take a parameter (an element, exemple: div)

    // doesn't return anything but create new elements for the card,
    //here for the texte divion of a card.
const getInfoCard = (division) =>{
    const nameInfo = document.createElement("h2");

    const ingredientInfo = document.createElement("p");
    const priceInfo = document.createElement("p");

    const addInfo = document.createElement("span");

// create 2 list to append element to the parameter and add class names.
    const liste = [nameInfo, ingredientInfo, priceInfo, addInfo];
    const listeClass =["info__name","info__ingredient","info__price","info__add"];
    for (let i =0; i < liste.length; i++) {
        liste[i].className = listeClass[i];
        division.appendChild(liste[i]);

    }
    

}
 //doesn't take any parameter 
 
// create a card for the food, divide the card in two div 
// one div is completed in the function 'getInfoCard'
// the other one with the image is completed here

const getFoodCard = () =>{
    const divCard = document.createElement("div");
    getAppendchild(document.querySelector("main"), divCard);
    const imgElement = document.createElement("img");

    const divImage = document.createElement("div");
    const divTexte = document.createElement("div");
    const elementListe = [divCard,divImage,imgElement,divTexte];
    const classListe = ["food__card","food__card__container","food__card__container__image","info"];
    for (let i =0; i< elementListe.length; i++){
        elementListe[i].className = classListe[i];
    }

    divCard.appendChild(divImage);
    divImage.appendChild(imgElement);
    divCard.appendChild(divTexte);
    

    getInfoCard(divTexte);
}





// to execute the program
getFoodCard();



