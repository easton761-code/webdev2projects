const saveBtn = document.querySelector('#saveprofile');

saveBtn.addEventListener('click', () => {
    let firstname = document.querySelector("input[name=first]");
    localStorage.setItem('wellness-firstname', firstname.value)

    let lastname = document.querySelector("input[name=last]");
    localStorage.setItem('wellness-lastname', lastname.value)

    let select = document.querySelector('#physical');
    let emotionValue = select.options[select.selectedIndex].value;
    localStorage.setItem('wellness-emoji', emotionValue);

    let emotionText = select.options[select.selectedIndex].text;
    localStorage.setItem('wellness-text', emotionText);

})

const deleteBtn = document.querySelector('#delProfile');

deleteBtn.addEventListener('click', () => {

    localStorage.removeItem('wellness-firstname');
    localStorage.removeItem('wellness-lastname');
    localStorage.removeItem('wellness-emoji');
    localStorage.removeItem('wellness-text');

    location.reload();

})

const check = localStorage.getItem('wellness-firstname');

if (check === null) {
    document.querySelector('#myProfile').className = 'hideme';
    document.querySelector('#newProfile').className = 'showeme';
} else {

    document.querySelector('#myProfile').className = 'showme';
    document.querySelector('#newProfile').className = 'hideme';

    document.querySelector('#first').textContent = localStorage.getItem('wellness-firstname');

    document.querySelector('#last').textContent = localStorage.getItem('wellness-lastname');

    document.querySelector('#emotion').textContent = localStorage.getItem('wellness-text');

    document.querySelector('#emoji').src = localStorage.getItem('wellness-emoji');
}
