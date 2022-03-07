//declarar las variables y los elementos que tomaran del codigo html
var btnOpenPopup = document.getElementById('popup-open'),
    overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        btnClosePopup = document.getElementById('btn-cerrar-popup');

//agregar la clase "active" cuando se haga click en el boton de comprar juego
btnOpenPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
        
//quitar la clase active cuando se haga click en el icono de "X" de cerrar pop up    
});
btnClosePopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
