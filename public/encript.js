function llaves(letra){
    if(letra=="a"){
        return "ai";
    }else if(letra=="e"){
        return "enter";
    }else if(letra=="i"){
        return "imes";
    }else if(letra=="o"){
        return "ober";
    }else if(letra=="u"){
        return "ufat";
    }else{
        return letra;
    }
}
var frase="";
let fraseModif="";
function encriptarTexto(){
    frase=input.value;
    for (let i = 0; i < frase.length; i++) {
        caracter=llaves(frase[i]);
        fraseModif += caracter;
    }
    desaparecerMensaje();
    document.getElementById("result").innerHTML = fraseModif;
    fraseModif="";
    input.value="";
}
function descriptarTexto(){
    frase=input.value;
    frase=frase.replace(/ai/g, "a");
    frase=frase.replace(/enter/g, "e");
    frase=frase.replace(/imes/g, "i");
    frase=frase.replace(/ober/g, "o");
    frase=frase.replace(/ufat/g, "u");
    desaparecerMensaje();
    document.getElementById("result").innerHTML = frase;
    input.value="";
}
function desaparecerMensaje() {
    var msjNda=document.getElementById("mensaje-oculto");
    var btnCopiar=document.getElementById("btnCopiar");
    if(msjNda.style.display=='none' && input.value==""){
        msjNda.style.display='block';
        btnCopiar.style.display="none";
    }else{
        msjNda.style.display='none'
        btnCopiar.style.display="block";
    }
}
function copiar() {
    navigator.clipboard.writeText(result.innerHTML);
    document.getElementById("result").innerHTML="";
    desaparecerMensaje();
}

var input = document.querySelector("textarea");
var botonEncrpt = document.querySelector(".btnEncriptar");
var botonDesencrpt = document.querySelector(".btnDesencriptar");
var botonCopiar=document.querySelector(".btnCpr");
botonEncrpt.onclick=encriptarTexto;
botonDesencrpt.onclick=descriptarTexto;
botonCopiar.onclick=copiar;