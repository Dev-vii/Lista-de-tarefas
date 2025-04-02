const taskContainer = document.getElementById('taskContainer');
const textBox = document.getElementById('TextBox');

function Add() {
    const taskText = textBox.value.trim();

    //Mensagem de erro
    if (taskText === "") {
        window.alert("Digite uma tarefa!");
        return;
    }

    //Criar elementos
    const taskDiv = document.createElement('div'); //Cria uma div com uma classe. dentro dela, um parágrafo e o botão de excluir
    taskDiv.className = 'task';

    const taskP = document.createElement('p');
    taskP.textContent = taskText;

    const trash = document.createElement('img');
    trash.src = 'img/trash.png';
    trash.alt = 'Deletar';
    trash.onclick = () => taskContainer.removeChild(taskDiv); //Função para remover uma tarefa

    //Mostar tudo na tela
    taskDiv.appendChild(taskP);
    taskDiv.appendChild(trash);
    taskContainer.appendChild(taskDiv);

    //Limpar input
    textBox.value = '';
}