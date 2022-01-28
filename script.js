
let array = [];

let sdo = {
    name:"Servicedog.org",
    link:"https://spokenprim618.github.io/servicedog.org/,

    descriptionText:"Final group website project about service Dogs in New York. Used CSS, JS, HTML, and API.",
    cardColor:"rgb(94, 193, 235",    
    imgPath:"images/sdo.png",
    
};

array.push(sdo);

let web = {
    name:"Personal Website",
    link:"https://spokenprim618.github.io/my-personal-website/,
    descriptionText:"Multi paged website during All Star Code used CSS, JS, and HTML with a group of students.",
    cardColor:"rgb(94, 193, 235",    
    imgPath:"images/web.png",
        
};

array.push(web);
    
let rps = {
    name:"Rock Paper Scissors",
    link:"https://spokenprim618.github.io/rockpaperscissors/",
    descriptionText:"Rock Paper Sciccors on the web against random input. Used HTML, CSS, and Jquery.",
    cardColor:"rgb(94, 193, 235",  
    imgPath:"images/rps.png",
 
 
};
array.push(rps);


function createCardDiv(cardObject) {
   let card = document.createElement('div');
   card.className="card";
   card.style.backgroundColor = cardObject.cardColor;
   card.style.width="24%"; 
  
    let cardText =document.createElement('div');
    let cardName=document.createElement('p');
    cardName.innerText=cardObject.name;
    cardText.appendChild(cardName);
    card.appendChild(cardText);
    let lin = document.createElement('a');
    lin.href= cardObject.link;

    let cardIMG =document.createElement('div');

    let newIMG=document.createElement("img");
    newIMG.className="cardimg";

    newIMG.src=cardObject.imgPath;
    lin.appendChild(newIMG);
    cardIMG.appendChild(lin);
    card.appendChild(cardIMG);

    let desc=document.createElement('p');
    desc.className="description";
    desc.innerText=cardObject.descriptionText;
    card.appendChild(desc);


    return card;
}

for(let i = 0; i < array.length; i++) {
    let newCard = createCardDiv(array[i]);

   let title = document.querySelector('.title');
    title.appendChild(newCard);
}
