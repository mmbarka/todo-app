function removeTask(task)
{
    var allTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    var indexTask = task.getAttribute("data-index");

    allTasks.splice(indexTask,1);
    localStorage.setItem('tasks',JSON.stringify(allTasks));
    refreshList();
}

function refreshList()
{
    var allTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    var todoList = document.getElementById("todoList");

    var detailsTodoList = ``;

    for (let i = 0; i < allTasks.length; i++) {
        
        detailsTodoList = detailsTodoList + `<li  class="mt-1" style="list-style-type:none; display: flex;">
        <div class=" border border-1 rounded-3 fs-5 col-md-10">${allTasks[i]}</div>
        <div class="col-md-1"></div>
        <div class="col-md-1"><button data-index="${i}" onclick="removeTask(this)" class="btn btn-warning"><i  class="fas fa-trash"></i></button></div>
    </li> `
    }

    todoList.innerHTML = detailsTodoList;
    
}

refreshList();

function addTask()
{
    var allTasks = JSON.parse(localStorage.getItem('tasks')|| '[]');

    var newTask = document.getElementById('newTask').value;

    document.getElementById('newTask').value = "";
    
    allTasks.push(newTask);

    localStorage.setItem('tasks',JSON.stringify(allTasks));

    refreshList(); 
}

function removeAllTasks()
{
    localStorage.setItem('tasks','[]');
    refreshList();
}
