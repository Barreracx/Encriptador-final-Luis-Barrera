const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function encriptar(stringEncriptada){
    let matrixCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrixCod.length; i++){
        if(stringEncriptada.includes(matrixCod[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrixCod[i][0], matrixCod[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrixCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrixCod.length; i++){
        if(stringDesencriptada.includes(matrixCod[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCod[i][1], matrixCod[i][0])
        }
    }
    return stringDesencriptada;
 }


