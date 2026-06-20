let fulldate=new Date();
console.log(fulldate);

let yearonly=fulldate.getFullYear();
console.log(yearonly)

document.querySelector('#theyear').textContent=yearonly;