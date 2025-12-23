let btAdicionar = document.getElementById("add");
let textoTarefa = "Tarefa: "
let textoPrioridade = " - Prioridade: "
// let contWhite = 1;
// let contRed = 0;

let tarefaCompleta = document.getElementById("completed")
let tarefaPendente = document.getElementById("pending")
let tarefaAll = document.getElementById("all")

btAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var novaLinha = document.createElement("li")

    let intarefa = document.getElementById("task").value;
    console.log(intarefa)
    let inopcao = document.getElementById("priority").value;
    console.log(inopcao)

    if (intarefa === "" || inopcao === "") {
        alert("Formulario em branco");
    } else {
        novaLinha.classList.add("item-lista")
        novaLinha.style.backgroundColor = "white"
        novaLinha.innerText = textoTarefa + intarefa + textoPrioridade + inopcao

        novaLinha.addEventListener("click", () => {
            // let cor = novaLinha.style.backgroundColor == "red" ? "white" : "red";
            // novaLinha.style.backgroundColor = cor

            let cor = novaLinha.style.backgroundColor;
            if (cor === "red") {
                novaLinha.style.backgroundColor = "white";
                contWhite++;
                if (contRed > 0) {
                    contRed--
                }
                console.log("Concluidas" + contRed)
                console.log("Pendente" + contWhite)
            } else {
                novaLinha.style.backgroundColor = "red";
                contRed++;
                if (contWhite > 0) {
                    contWhite--
                }
                console.log("Concluidas" + contRed)
                console.log("Pendente" + contWhite)

            }
        });
        document.getElementById("message").appendChild(novaLinha);

   


    }

    filtro(novaLinha)


});

function pendente() {
    if (contWhite === 0) {
        alert("Nenhuma tarefa pendente")
    }
}


function filtro(novaLinha){
  tarefaCompleta.addEventListener("click", () => {
            if (novaLinha.style.backgroundColor == "red") {
                novaLinha.style.display = "block"
            }
            if (novaLinha.style.backgroundColor == "white") {
                novaLinha.style.display = "none"
            }

        });

        tarefaPendente.addEventListener("click", () => {
            if (novaLinha.style.backgroundColor == "red") {
                novaLinha.style.display = "none"
            }
            if (novaLinha.style.backgroundColor == "white") {
                novaLinha.style.display = "block"
            }
            pendente();


        });

        tarefaAll.addEventListener("click", () => {
            if (novaLinha.style.backgroundColor == "red") {
                novaLinha.style.display = "block"
            }
            if (novaLinha.style.backgroundColor == "white") {
                novaLinha.style.display = "block"
            }

        });

        }
