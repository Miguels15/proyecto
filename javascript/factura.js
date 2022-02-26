function obtener(){
//IVA
const IVA= 0.13;

//obtencion de variables de formulario
var nom= document.getElementById("nombre").value;
var ape= document.getElementById("apellido").value;
var cor= document.getElementById("correo").value;
var num= document.getElementById("numerocopias").value;
const bt= document.getElementById("btnModal");
var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const precio= 59.99;
parseFloat(num)
//CALCULOS
var sub= num*precio;
var pIva= sub*IVA
var total= sub+pIva;

//Reemplazar con INNER HTML texto para la ventana modal
const contna= nom + " " + ape;
document.getElementById("reemplazo").innerHTML = contna;

const core= cor;
document.getElementById("reemplazo2").innerHTML = core;

document.getElementById("reemplazo3").innerHTML ="$" + sub;

document.getElementById("reemplazoIVA").innerHTML ="$" + pIva.toFixed(2);


document.getElementById("reemplazo4").innerHTML ="$" + total.toFixed(2);

document.getElementById("forma").addEventListener("submit", function(event){
  event.preventDefault()
});
document.getElementById("btnModal").addEventListener("click", function(event){
  event.preventDefault()
});
//Final del reemplazo
//Inicio de comparación para espacio vacios
if (nom==""|| ape=="" || cor=="" || numerocopias=="") {
	alert("Error...Los campos no pueden quedar vacios");
	document.getElementById("forma").addEventListener("submit", function(event){
  event.preventDefault()
});
document.getElementById("btnModal").addEventListener("click", function(event){
  event.preventDefault()
});
}
if ( !expr.test(cor) ){//Validación del Email
    alert("Error: La dirección de correo es incorrecta.");
   
    return false;
}else{

 if(nom!=""&& ape!="" && cor!="" && numerocopias!="" && document.getElementById("btnModal")){
			var modal = document.getElementById("myModal");
			var btn = document.getElementById("btnModal");
			var span = document.getElementsByClassName("close")[0];
			var body = document.getElementsByTagName("body")[0];

			btn.onclick = function() {
				modal.style.display = "block";

				body.style.position = "static";
				body.style.height = "100%";
				body.style.overflow = "hidden";
			}

			span.onclick = function() {
				modal.style.display = "none";

				body.style.position = "inherit";
				body.style.height = "auto";
				body.style.overflow = "visible";
			}

			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";

					body.style.position = "inherit";
					body.style.height = "auto";
					body.style.overflow = "visible";
				}
			}
		}
}
}
