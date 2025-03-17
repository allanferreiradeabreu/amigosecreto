let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    
    if (input.value === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(input.value)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(input.value);
    atualizarLista();
    input.value= "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    if (amigos.length > 0) {
        let i = 0;
        while (i < amigos.length) {
            let item = document.createElement("li");
            item.textContent = amigos[i];
            lista.appendChild(item);
            i++;
        }
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione um nome antes de sortear.");
        return;
    }

    let foiSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[foiSorteado];

    let resultado = document.getElementById("resultado");
    document.getElementById("listaAmigos").innerHTML = "";
    resultado.innerHTML = `O amigo secreto é: ${amigoSorteado}`;

}