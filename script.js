let btAdicionar = document.getElementById("add");
let listaTarefas = [];

btAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let intarefa = document.getElementById("task").value;
    console.log(intarefa)
    let inopcao = document.getElementById("priority").value;
    console.log(inopcao)

    if(intarefa === "" || inopcao === ""){
        alert("Formulario em branco");
    }else{
        let novaLinha = document.createElement("li")
        novaLinha.innerText = "Tarefa: "+intarefa+" - "+ "Prioridade: "+inopcao
        for(let i=0; i<=listaTarefas.length; i++){
       document.getElementById("message").appendChild(novaLinha);
        }
    }
    console.log(listaTarefas)
});