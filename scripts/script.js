function strikeLabel(event){
    var checkbox = event.target;
    var span = checkbox.parentElement.children[1];
    if(checkbox.checked){
        span.classList.add('striked');
    }
    else{
        span.classList.remove('striked');
    }
}

function criarItemLista(){
    var textoInput = document.getElementById('texto-adicionar');
    //Fazer verificação se texto está vazio
    var itemLista = document.createElement('li');
    itemLista.classList.add('list-item');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', strikeLabel);
    //checkbox.id = 'id';
    //checkbox.onclick

    itemLista.appendChild(checkbox);
    
    var span = document.createElement('span');
    span.textContent = textoInput.value;
    //span.id = '';

    itemLista.appendChild(span);

    var button = document.createElement('button');
    button.classList.add('delete-button');
    button.textContent = 'X';

    //Excluir item da lista
    button.addEventListener('click', function(){
        var confirmar = confirm("Deseja mesmo excluir esta atividade?")
        if(confirmar){
            itemLista.remove();
        }
    })

    itemLista.appendChild(button);

    //
    textoInput.value = "";
    return itemLista;
}

function adicionarItemLista(){
    
    if(true){
        document.getElementById('lista-afazeres').appendChild(criarItemLista());
    }
    else{
        alert("Vazio")
    }
}
