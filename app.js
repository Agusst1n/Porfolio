let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

load();

dayNight.onclick = function () {
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')

    store(body.classList.contains('dark'));
}
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}


function load(){
    const dark = localStorage.getItem('dark')

    if(!dark){
        store('false');
    }else if (dark == 'true'){
        body.classList.add('dark')
    }
}
function store(value){
    localStorage.setItem('dark', value);
}