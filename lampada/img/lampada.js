const turnOn = document.getElementById('turnOn' );
const turOff = document.getElementById('turnOff' );
const lamp = document.getElementById('lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1 
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
    
}
 
function lampOff () {
    lamp.src = './img/desligada.jpg';
}
  
function lampBroken () { 
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampBroken);
lampOff.addEventListener ('dblclick', lampBroken );