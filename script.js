//Função de adicionar tarefas

function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;
    console.log(taskTitle);

    if(taskTitle){
        // clonar o template
        const template = document.querySelector('.template');
        // console.log(template);
        const newTask = template.cloneNode(true);
        // console.log(newTask);

        // adicionar o titulo
        // <p></p>
        newTask.querySelector(".task-title").textContent = taskTitle;
        // console.log(newTask);

        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // minha ul
        // adicionar tarefa na lista
        const list = document.querySelector('#task-list');
        // adicionando o template <li> + <p> com o texto
        list.appendChild(newTask);

        //adicionar o evento remover
        const removeBtn = newTask.querySelector(".btn-remove")
            .addEventListener("click", function(){
                removeTask(this);
        })
        
        //adicionar o evento completar a tarefa
        const doneBtn = newTask.querySelector(".btn-done")
        .addEventListener("click", function(){
            completeTask(this);
        })
        
    }
    
    
    // limpar texto
    document.querySelector('#task-title').value ="";
}

const addBtn = document.querySelector('#btn-add');

addBtn.addEventListener("click", function(e){
    e.preventDefault(); // não efetuar reloald ou [F5] no navegador
    addTask();
})

function completeTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
}

function removeTask(task){
    task.parentNode.remove(task);
}