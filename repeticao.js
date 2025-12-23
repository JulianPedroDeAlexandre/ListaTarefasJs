let listaTarefas = []

const inputTarefa = document.getElementById("task");
const selectPriority = document.getElementById("priority");
const liTarefas = document.getElementById("message");

const btadd = document.getElementById("add");
btadd.addEventListener("click", (e) => {
    e.preventDefault()
    if (!inputTarefa.value)
        return alert("tarefa vazia");

    listaTarefas.push({
        nome: inputTarefa.value,
        prioridade: selectPriority.value,
        concuida: false
    });

    inputTarefa.value = "";
    renderizar();
});

function renderizar() {
    liTarefas.innerHTML = "";
    listaTarefas.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "item-lista";
        li.dataset.status = item.concuida ? "completed" : "pending";
        li.dataset.index = index;
        li.innerText = `tarefa: ${item.nome} - Prioridade: ${item.prioridade} - Status: ${item.concuida}`;
        liTarefas.appendChild(li);
    });
}

function renderi(){
    liTarefas.innerHTML = "";
    listaTarefas.forEach((item, index)=>{
    const li = document.createElement("li");
    li.className = "item-lista";
    li.dataset.status = item.concuida ? "complet" : "pending";
    li.dataset.index = index;
    li.innerText = `tarefa: ${item.nome} - Prioridade ${item.prioridade} - Status ${item.status}`;
    listaTarefas.appendChild(li);
    });
}