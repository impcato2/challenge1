document.querySelector(".texto").addEventListener("keydown",teclado);

function teclado(){
    let vengador1 = document.getElementById("vengador");
    vengador1.src="./images/vengador2.1.png";
}

document.querySelector(".texto").addEventListener("keyup",teclado2);

function teclado2(){
    let vengador = document.getElementById("vengador");
    vengador.src= "./images/Vengador1.png";
}


function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textoCifrado = texto    
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    

    if(texto.length != 0 ){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "¡Encriptamos el texto Vengador!";
        parrafo.textContent = "";
        imagen.src = "./images/m3.png";
    } else {
        imagen.src = "./images/m1.png";
        tituloMensaje.textContent = "¡Rapido, vengador pon un texto!";
        parrafo.textContent = "Ingresa el texto que se va a encriptar o desencriptar";
        //alert("Debes ingresar un texto");
        swal("Ooops", "Debes ingresar un texto", "warning");
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("mensaje-titulo");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");        

        if(texto.length != 0 ){
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "¡Lo hicimos Vengador, desencriptamos el texto!";
            parrafo.textContent = "";
            imagen.src = "./images/m2.png";
        } else {
            imagen.src = "./images/m1.png";
            tituloMensaje.textContent = "¡Rapido, vengador pon un texto!";
            parrafo.textContent = "Ingresa el texto que se va a encriptar o desencriptar";
            //alert("Debes ingresar un texto");
            swal("Ooops", "Debes ingresar un texto", "warning");
        }
    }
