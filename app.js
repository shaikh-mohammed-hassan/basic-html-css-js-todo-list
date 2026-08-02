const addTodoBtn = document.querySelector("#addTodoBtn")
const inputTag = document.querySelector("#todoInput")
let todoText; // When user will enter the task 

// if we have a local storage we will read it 
let todos = []
let todoString = localStorage.getItem("todos")
if(todoString){
    todos = JSON.parse(todoString)
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