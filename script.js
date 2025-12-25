let arraytarefas = [];

const tarefaInput = document.getElementById("task");
const prioridadeSelect = document.getElementById("priority");
const tarefaLi = document.getElementById("message");
const addBt = document.getElementById("add");

let armazenamento = JSON.parse(localStorage.getItem("RegistroDeTarefa")) || [];


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
        const bttRemove = document.createElement("button");
        bttRemove.innerText = "Deletar";
        bttRemove.className = "remove-tarefa"
        bttRemove.dataset.index = index;
        li.appendChild(bttRemove);
        tarefaLi.appendChild(li);
    });
}

tarefaLi.addEventListener("click", (e) => {
    if(e.target.classList.contains("item-lista")){
        const index = e.target.dataset.index;
       arraytarefas[index].concluido = !arraytarefas[index].concluido;
        renderizar();
    }

    if(e.target.classList.contains("remove-tarefa")){
        const index = e.target.dataset.index;
        const confirmar = confirm("Tem certeza que quer remover a tarefa?")
        if(confirmar){
        arraytarefas.splice(index, 1)
        renderizar();
        return
        }
    }
});

document.getElementById("completed").onclick = () => filtrar("completed"); 
document.getElementById("pending").onclick = () => filtrar("pending");
document.getElementById("all").onclick = () => filtrar("all")

function filtrar(filtro){
    let itemFiltro = document.querySelectorAll(".item-lista");
    let achaItem = false;
    itemFiltro.forEach(li => {
        let itemDaLista = li.dataset.status;
        let mostra = (filtro === "all" || itemDaLista === filtro);
        li.style.display = mostra ? "flex" : "none";
        if(mostra) achaItem = true;
    });
    if(!achaItem && arraytarefas.length > 0){
        alert(`sem tarefas ${filtro}`);
    }
}
