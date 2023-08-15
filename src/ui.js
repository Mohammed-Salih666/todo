import {Project} from './project.js';
import {Todo} from './todo.js';
import Logo from './to-do-list.png'; 

const logoImage = document.querySelector('#logo-image'); 
logoImage.src = Logo;
const projects = [];
const main = document.querySelector('#main');
const addBtn = document.querySelector('#add-btn'); 

const projectInput = document.createElement('form'); 
projectInput.id = "project-input"; 


const projectInputHtml = `
    <input type="text" name="title" id="title" placeholder="Title: ">

    <div>
        <label for="date"> Due Date: </label>
        <input type="date" name="date" id="date">
    </div>

    <div id="priority-radio-btns">
    <label for="priority-radio-btns">Priority: </label>
    <input type="radio" id="high-radio" name="priority-select" value="High" checked>
    <label for="project-radio" style="color:red;">High</label>
    <input type="radio" id="medium-radio" name="priority-select" value="Medium">
    <label for="todo-radio" style="color:orange;">Medium</label>
    <input type="radio" id="low-radio" name="priority-select" value="Low">
    <label for="todo-radio" style="color:lightgreen;">Low</label>
</div>

    <button type="submit" id="submit-button">Add Project</button>
`;


projectInput.insertAdjacentHTML('afterbegin', projectInputHtml); 


addBtn.addEventListener('click', () => {
    document.body.appendChild(projectInput);
});

projectInput.addEventListener('submit', (event) => {
    event.preventDefault();

        const title = projectInput.elements['title'].value; 
        const date = projectInput.elements['date'].value; 
        const priority = projectInput.elements['high-radio'].checked? "high" : projectInput.elements['medium-radio'].checked ? "medium" : "low"; 
    
        const project = new Project(title, date, priority); 
        projects.push(project); 

        const projectDiv = document.createElement('div'); 
        projectDiv.classList.add("project", `${project.priority}-priority`);

        projectDiv.insertAdjacentHTML('afterbegin', `
                <div>
                    <input type="checkbox" id="is-completed" name="is-completed" >
                    <p class="project-title"><b>${project.title}</b></p>
                </div>
                <p class="project-date">${project.date}</p>
        `);
        
        const detailsSpan = document.createElement('span'); 
        detailsSpan.classList.add("project-details");
        detailsSpan.textContent = "Details"; 
        const projectIndex = projects.length-1; 
        detailsSpan.addEventListener('click', ()=> openProject(projectIndex)); 
        projectDiv.appendChild(detailsSpan);
        main.appendChild(projectDiv);
        document.body.removeChild(projectInput);
        projectInput.reset();


});


const openProject = (index) => {
    console.log(projects.length);

    const projectTodos = document.createElement('div'); 
    projectTodos.id = "project-todos"; 

    const openedProjectHtml = `
    
        <h3>${projects[index].title}</h3>
    
`; 

    for(let i = 0; i<projects[index].todos.length; i++) {
        let todo = projects[index].todos[i];

        let todoDiv = document.createElement('div'); 
        todoDiv.classList.add("todo", `${todo.priority}-priority`);

        todoDiv.insertAdjacentHTML('afterbegin', `
            <div>
            <input type="checkbox" id="is-completed" name="is-completed" >
            <p class="todo-title"><b>${todo.title}</b></p>
            </div>
            <p class="todo-description">${todo.description}</p>
            <p class="todo-date">${todo.date}</p>
        `);
     projectTodos.appendChild(todoDiv);    
}

    const closeBtn = document.createElement('span'); 
    closeBtn.textContent = "x"; 
    closeBtn.id = "close-btn";
    projectTodos.appendChild(closeBtn);

    const addTodoBtn = document.createElement('span'); 
    addTodoBtn.id = "add-todo-btn"; 
    addTodoBtn.textContent = "Add a Todo";




    const todoInput = document.createElement('form');
    todoInput.id = "todo-input"; 

    const todoInputHtml = `
    <div>
        <input type="text" name="title" id="title" placeholder="Title: ">
        <textarea id="description" name="description" placeholder="Description: " rows="10"></textarea>
    </div>
    <div>
            <label for="date"> Due Date: </label>
            <input type="date" name="date" id="date">
        </div>
    
        <div id="priority-radio-btns">
            <label for="priority-radio-btns">Priority: </label>
            <input type="radio" id="high-radio" name="priority-select" value="High" checked>
            <label for="project-radio" style="color:red;">High</label>
            <input type="radio" id="medium-radio" name="priority-select" value="Medium">
            <label for="todo-radio" style="color:orange;">Medium</label>
            <input type="radio" id="low-radio" name="priority-select" value="Low">
            <label for="todo-radio" style="color:lightgreen;">Low</label>
        </div>
    <button type="submit" id="submit-button">Add Todo</button>
    
    `;
    todoInput.insertAdjacentHTML('afterbegin', todoInputHtml);



    addTodoBtn.addEventListener("click", () => {
        document.body.appendChild(todoInput);
    });
    
    projectTodos.appendChild(addTodoBtn);
    
    projectTodos.insertAdjacentHTML('afterbegin', openedProjectHtml); 
    document.body.appendChild(projectTodos);
    
    closeBtn.addEventListener("click", () => {
        document.body.removeChild(projectTodos)
    }); 

    todoInput.addEventListener("submit", (event) => {
        event.preventDefault(); 
        


        const title = todoInput.elements['title'].value; 
        const description = todoInput.elements['description'].value; 
        const date = todoInput.elements['date'].value; 
        const priority = todoInput.elements['high-radio'].checked? "high" : todoInput.elements['medium-radio'].checked ? "medium" : "low";
        const todo = new Todo(title, description, date, priority); 
        
        const todoDiv = document.createElement('div'); 
        todoDiv.classList.add("todo", `${todo.priority}-priority`);

        todoDiv.insertAdjacentHTML('afterbegin', `
                <div>
                    <input type="checkbox" id="is-completed" name="is-completed" >
                    <p class="todo-title"><b>${todo.title}</b></p>
                </div>
                <p class="todo-description">${todo.description}</p>
                <p class="todo-date">${todo.date}</p>
        `);

        projectTodos.appendChild(todoDiv); 



        projects[index].addNewTodo(todo);        
        document.body.removeChild(todoInput);
        todoInput.reset();
    }) ;
    

}
