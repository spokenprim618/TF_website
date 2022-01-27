
let array = [];

let sdo = {
    name:"Servicedog.org",
    link:"https://github.com/spokenprim618/servicedog.org",

    descriptionText:"Final group website project about service Dogs in New York. Used CSS, JS, HTML, and API.",
    cardColor:"rgb(94, 193, 235",    
    imgPath:"images/sdo.png",
    
};

array.push(sdo);//appending the array with mudkip

let web = {
    name:"Personal Website",
    link:"https://github.com/spokenprim618/my-personal-website",
    descriptionText:"Multi paged website during All Star Code used CSS, JS, and HTML with a group of students.",
    cardColor:"rgb(94, 193, 235",    
    imgPath:"images/web.png",
        
};

array.push(web);//appending the array with mudkip
    
let rps = {
    name:"Rock Paper Scissors",
    link:https:"github.com/spokenprim618/rockpaperscissors/tree/glitch",
    descriptionText:"Rock Paper Sciccors on the web against random input. Used HTML, CSS, and Jquery.",
    cardColor:"rgb(94, 193, 235",  
    imgPath:"images/rps.png",
 
 
};
array.push(rps);


function createCardDiv(cardObject) {
   let card = document.createElement('div');
   card.className="card";
   card.style.backgroundColor = cardObject.cardColor;
   card.style.width="16.21%";
  
  
    let cardText =document.createElement('div');
    let cardName=document.createElement('p');
    cardName.innerText=cardObject.name;
    cardText.appendChild(cardName);
    card.appendChild(cardText);
    let lin = document.createElement('a');
    lin.href= cardObject.link;

    let cardIMG =document.createElement('div');
    let newIMG=document.createElement("img");
    newIMG.style.width="200px";
    newIMG.src=cardObject.imgPath;
    lin.appendChild(newIMG);
    cardIMG.appendChild(lin);
    card.appendChild(cardIMG);

    let desc=document.createElement('p');
    desc.className="description";
    desc.innerText=cardObject.descriptionText;
    card.appendChild(desc);


//problem with image again
    return card;
}


for(let i = 0; i < array.length; i++) {//line 33 calls createCardDiv() creating a newCard div
    let newCard = createCardDiv(array[i]);

   let title = document.querySelector('.title');
    title.appendChild(newCard);// appends the new card to the #containerDiv in the HTML
}