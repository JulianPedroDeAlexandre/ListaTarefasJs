let tarefas = []; //lista manda em tudo, aqui tem o que aparece na tela
// 1 - mapeamento dos ids, onde fica a lista, input e select
const listaElTagLi = document.getElementById("message");
const inputTask = document.getElementById("task");
const selectPriority = document.getElementById("priority");

const botaoAdd = document.getElementById("add");
botaoAdd.addEventListener("click", (e) => {
    e.preventDefault();
    if(!inputTask.value)
        return alert("Tarefa vazia!")

    tarefas.push({
        nome:inputTask.value,
        prioridade: selectPriority.value,
        concluida: false
    });
    inputTask.value = ""
    console.log(tarefas)
    // renderizar();
});