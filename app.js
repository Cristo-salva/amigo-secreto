//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
//função para adicionar amigo
function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo').value;
    //validar campo do nome
    
    if (nomeDigitado == '') {
        alert('Por favor insira um nome!');
    } else {
        //adicionar lista de amigos
        amigos.push(nomeDigitado);

        //limpar campo de entrada-amigo
        document.getElementById('amigo').value = '';

    //########### usando IF sem o ELSE (return)  ###########
    // if (nomeDigitado == '') {
    //     alert('Por favor insira um nome!');
    //     return;
    // }
    // //adicionar lista de amigos
    // amigos.push(nomeDigitado);
    
    // //limpar campo de entrada-amigo
    // document.getElementById('amigo').value = '';

    // //exibir lista atualizada
    // console.log(amigos);
    }
    percorrer();
    
    //exibir lista atualizada
    console.log(amigos);

    
}

//atualizar a lista de amigos
function percorrer() {
    //buscar no HTML o elemento com id listaAmigos onde será adicionada os itens da lista 
    let listaHTML = document.getElementById('listaAmigos');
    //limpar lista antes de adicionar novos elementos
    listaHTML.innerHTML = '';

    //percorrer a lista de amigos na condição de i ser menor que a quantidade na lista de amigos, após verificada a condição adiciona 1 no valor de i
    for (let i = 0; i < amigos.length; i++) {
        //a cada verificaçao é criado um elemento <li> para cada amigo
        let li = document.createElement('li');
        //o conteúdo do elemento <li> é definido como um nome de amigo na lista
        li.textContent = amigos[i];
        //<li> é adicionado na lista de amigos do HTML
        listaHTML.appendChild(li);
    }
}

//sortear amigo
function sortearAmigo() {
    //verificar se lista de amigos não esta vazia
    if (amigos == '') {
        alert('Insira o nome dos seus amigos para sorteio!')
    } else {
        //selecionar aleatório
        let iAleatorio = Math.floor(Math.random() * amigos.length);
        //nome do amigo sorteado
        let amigoSorteado = amigos[iAleatorio];
        //mostrar sorteado
        let sorteado = document.getElementById('resultado');
        sorteado.innerHTML = amigoSorteado;
    }
}
