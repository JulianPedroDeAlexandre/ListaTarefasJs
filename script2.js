let btAdicionar = document.getElementById("add");
let textoTarefa = "Tarefa: ";
let textoPrioridade = " - Prioridade: ";

// Seleção dos botões de filtro
let tarefaCompleta = document.getElementById("completed");
let tarefaPendente = document.getElementById("pending");
let tarefaAll = document.getElementById("all");

// Evento de Adicionar Tarefa
btAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    
    let intarefa = document.getElementById("task").value;
    let inopcao = document.getElementById("priority").value;

    if (intarefa === "" || inopcao === "") {
        alert("Formulário em branco");
        return; // Para a execução aqui
    }

    var novaLinha = document.createElement("li");
    novaLinha.classList.add("item-lista");
    novaLinha.style.backgroundColor = "white"; // Pendente inicial
    novaLinha.innerText = textoTarefa + intarefa + textoPrioridade + inopcao;

    // Evento de Alternar Cor (Concluir/Desfazer)
    novaLinha.addEventListener("click", () => {
        if (novaLinha.style.backgroundColor === "red") {
            novaLinha.style.backgroundColor = "white";
        } else {
            novaLinha.style.backgroundColor = "red";
        }
    });

    document.getElementById("message").appendChild(novaLinha);
    document.getElementById("task").value = ""; // Limpa o campo após adicionar
});

// --- LÓGICA DE FILTROS (FORA DO LOOP) ---

tarefaAll.addEventListener("click", () => {
    let todas = document.querySelectorAll(".item-lista");
    todas.forEach(li => li.style.display = "block");
});

tarefaCompleta.addEventListener("click", () => {
    let todas = document.querySelectorAll(".item-lista");
    let encontrou = false;

    todas.forEach(li => {
        if (li.style.backgroundColor === "red") {
            li.style.display = "block";
            encontrou = true;
        } else {
            li.style.display = "none";
        }
    });

    if (!encontrou) alert("Nenhuma tarefa concluída");
});

tarefaPendente.addEventListener("click", () => {
    let todas = document.querySelectorAll(".item-lista");
    let encontrouPendente = false;

    todas.forEach(li => {
        if (li.style.backgroundColor === "white") {
            li.style.display = "block";
            encontrouPendente = true;
        } else {
            li.style.display = "none";
        }
    });

    // O Alerta só aparece UMA VEZ após o loop verificar todas as tarefas
    if (!encontrouPendente) {
        alert("Nenhuma tarefa pendente");
    }
});