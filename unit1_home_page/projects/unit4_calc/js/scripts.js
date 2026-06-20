//function to add li

let addlistitem = (list, message) => {

    let thelist = document.querySelector(list);
    let listitem = document.createElement('li');
    listitem.textContent = message;
    thelist.appendChild(listitem);

}//end of add li function

document.querySelector('#Calculate').addEventListener('click', () => {
   //deleat exsting lists
   document.querySelector('#paint').innerHTML = "";
   document.querySelector('#carpet').innerHTML = "";
   
    const width = Number(document.querySelector('#width').value);
    console.log(width);

    const depth = Number(document.querySelector('#depth').value);
    console.log("depth");

    const height = Number(document.querySelector('#height').value);
    console.log("height");

    const paintType = document.querySelector('#quality').selectedOptions[0].text;
    console.log(paintType);

    const quality = document.querySelector('#quality').selectedOptions[0].value;
    console.log(quality);

    let carpet = Math.round((width * depth) / 9);
    console.log(carpet + "yards of carpet");

    let tackstrip = width + depth + width + depth;
    console.log(tackstrip + "feet of tackstrip");

    let walls = ((width * height) * 2) + ((depth * height) * 2);
    walls = Math.ceil(walls / quality);
    console.log(walls + "gallons of semi-gloss paint for the walls");

    let ceiling = Math.ceil((width * depth) / quality);
    console.log(ceiling + "gallons of flat paint for the ceiling");

    let primer = walls + ceiling;
    console.log(primer + "galons of primer");
    //add data back to users visual

    addlistitem("#paint", primer + " galons of primer");
    addlistitem("#paint", walls + " gallons of semi-gloss paint for the walls");
    addlistitem("#paint", `${ceiling} gallons of flat paint for the ceiling`);

    addlistitem('#carpet', carpet + ' yards of carpet');
    addlistitem('#carpet', tackstrip + " feet of tackstrip");

}) //end of Calculate function