let arraytarefas = [];

const tarefaInput = document.getElementById("task");
const prioridadeSelect = document.getElementById("priority");
const tarefaLi = document.getElementById("message");
const addBt = document.getElementById("add");

addBt.addEventListener("click", (e) =>{
    e.preventDefault();
    if(!tarefaInput.value)
        return alert("preencha o formulario");

    arraytarefas.push({
        nome:tarefaInput.value,
        prioridade:prioridadeSelect.value,
        status:false
    });
    tarefaInput.value = "";
    renderizar()
});

function renderizar(){
    tarefaLi.innerHTML = ""
    arraytarefas.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "item-lista";
        li.dataset.status = item.concluido ? "completed" : "pending";
        li.dataset.index = index;
        li.innerText = `tarefa: ${item.nome} - Prioridade: ${item.prioridade} - Status: ${item.status}`;
        tarefaLi.appendChild(li);
    })

}

tarefaLi.addEventListener("click", (e) => {
    if(e.target.classList.contains("item-lista")){
        const index = e.target.dataset.index;
       arraytarefas[index].concluido = !arraytarefas[index].concluido;
        renderizar();
    }
});