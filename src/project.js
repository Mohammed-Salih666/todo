export class Project {
    constructor(title, date) {
        this.title = title; 
        this.date = title; 
        this.isCompleted = false; 
    }

    changeCompletion() {
        this.isCompleted = !this.isCompleted; 
    }
}
