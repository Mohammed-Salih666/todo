export class Project {
    constructor(title, date, priority) {
        this.title = title; 
        this.date = date; 
        this.priority = priority; 
        this.isCompleted = false; 
        this.todos = []; 
    }

    changeCompletion() {
        this.isCompleted = !this.isCompleted; 
    }

    addNewTodo(todo){
        this.todos.push(todo)
    }
}
