// 1. ESTADO DA APLICAÇÃO (A "Única Verdade")
let tarefas = []; 

const listEl = document.getElementById("message");
const inputTask = document.getElementById("task");
const inputPriority = document.getElementById("priority");

// 2. FUNÇÃO DE RENDERIZAÇÃO (Desenha a tela baseada no Array)
function renderizar() {
    listEl.innerHTML = ""; // Limpa a tela
    
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.className = "item-lista";
        li.dataset.status = tarefa.concluida ? "completed" : "pending";
        li.dataset.index = index; // Para sabermos qual tarefa é qual
        li.innerText = `Tarefa: ${tarefa.nome} - Prioridade: ${tarefa.prioridade}`;
        listEl.appendChild(li);
    });
}

// 3. DELEGAÇÃO DE EVENTO (Um clique para todas as tarefas)
listEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("item-lista")) {
        const index = e.target.dataset.index;
        tarefas[index].concluida = !tarefas[index].concluida; // Inverte o estado
        renderizar(); // Redesenha a tela
    }
});

// 4. ADICIONAR NOVA TAREFA
document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();
    if (!inputTask.value) 
    return alert("Preencha a tarefa!");

    tarefas.push({
        nome: inputTask.value,
        prioridade: inputPriority.value,
        concluida: false
    });

    inputTask.value = "";
    renderizar();
});

// 5. FILTROS PROFISSIONAIS
function filtrar(tipo) {
    const itens = document.querySelectorAll(".item-lista");
    let encontrou = false;

    itens.forEach(li => {
        const status = li.dataset.status;
        const mostrar = (tipo === "all" || status === tipo);
        li.style.display = mostrar ? "block" : "none";
        if (mostrar) encontrou = true;
    });

    if (!encontrou && tarefas.length > 0) alert(`Sem tarefas ${tipo}`);
}

// Eventos dos botões de filtro
document.getElementById("all").onclick = () => filtrar("all");
document.getElementById("completed").onclick = () => filtrar("completed");
document.getElementById("pending").onclick = () => filtrar("pending");