function criarItemLista(texto, checked) {
    document.getElementById('texto-adicionar').value = '';
    var itemLista = document.createElement('li');
    itemLista.classList.add('list-item');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', strikeSpan);
    checkbox.checked = checked;

    itemLista.appendChild(checkbox);

    var span = document.createElement('span');
    span.textContent = texto;

    if (checkbox.checked) {
        span.classList.add('striked');
    }

    itemLista.appendChild(span);

    var button = document.createElement('button');
    button.classList.add('delete-button');
    button.textContent = 'X';

    //Excluir item da lista
    button.addEventListener('click', function () {
        var confirmar = confirm('Deseja mesmo excluir esta atividade?')
        if (confirmar) {
            itemLista.remove();
            salvarTarefas();
        }
    })

    itemLista.appendChild(button);

    return itemLista;
}
//Função de adicionar um item pelo botão
function adicionarItemLista() {
    var textoInput = document.getElementById('texto-adicionar').value;

    if (textoInput != '') {
        document.getElementById('lista-afazeres').appendChild(criarItemLista(textoInput, false));
        salvarTarefas();
    }
    else {
        alert('Digite uma atividade válida!')
    }
}
//Função de riscar o texto
function strikeSpan(event) {
    var checkbox = event.target;
    var span = checkbox.parentElement.children[1];
    if (checkbox.checked) {
        span.classList.add('striked');
    }
    else {
        span.classList.remove('striked');
    }
    salvarTarefas();
}

function limparLista() {
    var itensLista = document.querySelectorAll('.list-item');
    if (itensLista.length == 0) {
        alert("A lista está vazia!");
    }
    else {
        var confirmar = confirm("Deseja mesmo excluir todos os itens da lista?");
        if (confirmar) {
            for (item of itensLista) {
                item.remove();
            }
            salvarTarefas();
        }
    }
}