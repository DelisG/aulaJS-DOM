const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampBroken () {
    return src="./img/quebrada.jpg";
}

function lampOn () {
    if (!isLampBroken ()) {
        lamp.src="./img/ligada.jpg";
    }
}

function lampOff () {
    if (!isLampBroken ()) {
        lamp.src="./img/desligada.jpg";
    }
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);


// const turnOn = document.getElementById(' turnOn ');
// const turnOff = document.getElementById(' turnOff ');
// const lamp = document.getElementById(' lamp ');

// function isLampBroken () {
//     return lamp.src = "./img/quebrada.jpg";
// }

// function lampBroken () {
//   return lamp.src.indexOf("quebrada") > -1;
// }
// function lampOn () {
//   if (!isLampBroken ()) {
//     lamp.src = "./img/ligada.jpg";
//   }
// }

// function lampOff () {
//   if (!isLampBroken ()) {
//     lamp.src = "./img/desligada.jpg";
//   }
// }




// // função para criar eventos onde o 'primeiro' parametro é o evento e o segundo parametro é o nome da função
// turnOn.addEventListener('click', lampOn);
// turnOff.addEventListener('click', lampOff);
// lamp.addEventListener('mouseover', lampOn);
// lamp.addEventListener('mouseleave', lampOff);
// lamp.addEventListener('dblclick', lampBroken);

