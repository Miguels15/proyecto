var btnOpenPopup = document.getElementById('popup-open'),
    overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        btnClosePopup = document.getElementById('btn-cerrar-popup');

btnOpenPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
        
});
btnClosePopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
