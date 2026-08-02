const addTodoBtn = document.querySelector("#addTodoBtn")
const inputTag = document.querySelector("#todoInput")
const todoListUL = document.querySelector("#todoList")
const todoCheckboxes = document.querySelectorAll(".todo-checkbox")
let todoText; // When user will enter the task 

// if we have a local storage we will read it 
let todos = []
let todoString = localStorage.getItem("todos")
if(todoString){
    todos = JSON.parse(todoString)
}

const populateTodos = ()=> {
    let string = ""
    for(const todo of todos){
        string += `<li class="todo-item ${todo.isCompleted? "completed": ""}" >
                    <input type="checkbox" class="todo-checkbox" ${todo.isCompleted? "checked": ""}>
                    <span class="todo-text">${todo.title}</span>
                    <button class="delete-btn">×</button>
                </li>`
    }
    todoListUL.innerHTML = todoListUL.innerHTML + string
}


addTodoBtn.addEventListener("click",()=>{
    todoText = inputTag.value
    console.log(todoText)
    inputTag.value = ""

    let todo = {
        title: todoText,
        isCompleted: false
    }
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
})

populateTodos()