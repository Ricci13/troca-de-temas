'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('tema-claro');
    document.body.classList.toggle('tema-escuro');

    const className = document.body.className;
    if(className == "tema-claro") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

});






