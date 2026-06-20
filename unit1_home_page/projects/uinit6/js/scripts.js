import { Presidents } from '../data/presidents.js';
console.log(Presidents);

const myTarget = document.querySelector('#cards');

const pathStart = "//resources.dgmuvu.com/presidents/"

for (let i = 0; i < Presidents.length; i++) {
    let barDiv = document.createElement('div');
    let myImage = document.createElement('img');
    let myCaption = document.createElement('figcaption');
    let myFigure = document.createElement('figure');

    barDiv.innerHTML = `<p>${Presidents[i].name}</p>`;
    myImage.setAttribute("src", pathStart + Presidents[i].photo);
    myImage.setAttribute("alt", Presidents[i].name);
    myCaption.innerHTML = `Served ${Presidents[i].took_office}- ${Presidents[i].left_office} <br> 
    lived from  ${Presidents[i].born} to  ${Presidents[i].died} <br> 
    party; ${Presidents[i].party}`;

    myFigure.appendChild(barDiv);
    myFigure.appendChild(myImage);
    myFigure.appendChild(myCaption);

    myTarget.appendChild(myFigure);
}

