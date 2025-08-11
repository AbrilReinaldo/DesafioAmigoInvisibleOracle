let listaAmigos= [];


function asignarTextoelemento(selector, texto){
    const elementoHTML = document.querySelector(selector);
    if (elementoHTML) {
        elementoHTML.textContent = texto;
    }
}

function sortearAmigo(){
    let numeroMaximo = listaAmigos.length;
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo);
    console.log(listaAmigos[numeroGenerado]);
    asignarTextoelemento('#mensaje', `Tu amigo secreto ${listaAmigos[numeroGenerado]}`);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpia resultados anteriores
    let li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${listaAmigos[numeroGenerado]}`;
    resultado.appendChild(li);
    return;

}
//agrega a los amigos a la lista 
function agregarAmigo(){
    let nombre= document.getElementById('amigo').value.trim();
//Alerta por si ingresan un nombre en blanco
    if (nombre === "") {
        alert("Ingresa un nombre válido");
        return;
    }
    //para que no ponga el mismo nopmbre repetido
    if (listaAmigos.includes(nombre)) {
        alert("Ese amigo ya está en la lista");
        return;
    }
    listaAmigos.push(nombre); 

   
    mostrarListaAmigos();
    document.getElementById('amigo').value = ""; // limpiar input
    //return;
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";


    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


