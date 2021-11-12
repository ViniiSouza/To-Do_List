function salvarTarefas() {
    var tarefas = document.querySelectorAll('.list-item')
    listaTarefas = []
    for (let tarefa of tarefas) {
        listaTarefas.push({ 'checkbox': tarefa.children[0].checked, 'tarefa': tarefa.children[1].textContent })
    }
    localStorage.setItem('Lista', JSON.stringify(listaTarefas));
}

function carregarTarefas() {
    listaTarefas = JSON.parse(localStorage.getItem('Lista'));
    console.log(listaTarefas);
    //adicionarItemLista();
    for (tarefa of listaTarefas) {
        document.getElementById('lista-afazeres').appendChild(criarItemLista(tarefa.tarefa, tarefa.checkbox));
    }
}