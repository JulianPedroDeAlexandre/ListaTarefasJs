let btAdicionar = document.getElementById("add");
// let listaTarefas = [];
let textoTarefa = "Tarefa: "
let textoPrioridade = " - Prioridade: "

btAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    let intarefa = document.getElementById("task").value;
    console.log(intarefa)
    let inopcao = document.getElementById("priority").value;
    console.log(inopcao)

    if (intarefa === "" || inopcao === "") {
        alert("Formulario em branco");
    } else {
        let novaLinha = document.createElement("li")
        novaLinha.classList.add("item-lista")
        novaLinha.innerText = textoTarefa + intarefa + textoPrioridade + inopcao
        // for(let i=0; i<=listaTarefas.length; i++){
        document.getElementById("message").appendChild(novaLinha);
        // }
    }
    const tarefaFeita = document.querySelectorAll(".item-lista");
    tarefaFeita.forEach((botao) => {
        botao.addEventListener("click", () => {
          botao.style.backgroundColor = "red"
        });
    });
});

