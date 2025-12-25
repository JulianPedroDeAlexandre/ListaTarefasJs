criar o array de objetos nossa lista
mapear o input, select e a li 
criar o evento de clique arrowfunction com o pointer event (e) para o botao
fazer o preventDefault do pointer event
if para saber se não tem valor no input de tarefas
nesse if retornar uma mensagem
colocar na lista (push) as propriedades do objeto
limpar o input da tarefa e chamar a função renderizar

na função renderizar
limpamos a variavel do id da ul
foreach com item e index no array
variavel de li para criar a li
nessa variavel damos o nome da classe
damos um dataset.status com um ternatio de item concluido com completed e pending
damos um dataset.index passando o index
damos o texto com as variaveis 
damos para a a variavel da ul a li como filha 

trocar status dos eventos
evento de click com pointer event na var da ul
se o evento alvo de classlist conter a classe item-lista
uma variavel recebe o evento alvo com dataset index
o array na posição index.concluida recebe seu contrario
chama renderizar

mapeamento dos eventos de click com a função filtrar com o parametro de filtro
função filtro com parametro
damos para uma variavel o selectorall da classe item-lista
iniciamos uma varivel de achar itens como false
na variavel do selector fizemos um foreach para tag li
uma variavel recebe essa li com datasert status
outra variavel recebe tipo ==="all" ou status === tipo
li de estilo display recebe o ternario de block ou none
se a variavel que recebeu a variavel do false vira true
outro if que nega a variavel do false e array length maior que zero  da um alerta de sem tarefas
