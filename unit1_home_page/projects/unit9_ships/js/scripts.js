//add links to html
const myNavigation = document.querySelector('nav')
const myViewer = document.querySelector('main')




//grab the data and wait 
fetch("../data/starships.json")
    .then((response) => response.json())
    .then((shipArray) => {
        console.log(shipArray)
        populateNav(shipArray)
    })


//populate the nav
function populateNav(allShips) {
    console.log(allShips)
    allShips.forEach(ship => {
        let myButton = document.createElement('button')
        console.log(ship.name)
        myButton.textContent = ship.name
        myButton.addEventListener('click', () => showShip(ship))
        myNavigation.appendChild(myButton)
    })//end of the loop

}//end of nav  


//ship 
function showShip(x){
    console.log(x)
}