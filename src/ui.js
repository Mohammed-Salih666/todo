const main = document.querySelector('#main');
const addBtn = document.querySelector('#add-btn'); 

const input = document.createElement('form'); 
input.id = 'input-form';

input.insertAdjacentHTML('afterbegin', `
    <div id="input-radio-btns">
        <input type="radio" id="project-radio" name="input-select" value="Project">
        <label for="project-radio">Project</label>
        <input type="radio" id="todo-radio" name="input-select" value="Todo">
        <label for="todo-radio">Todo</label>
    </div>
    `);

const projectInput = document.createElement('div'); 
const todoInput = document.createElement('div'); 

const projectInputHtml = `
    <input type="text" name="title" id="title" placeholder="title">
    <input type="date" name="date" id="date" placeholder="Due Date">
    <select name="priority"> 
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="high">Low</option>
    </select>

    <button type="submit" id="submit-buton">Add Project</button>
`;

const todoInputHtml = `
<input type="text" name="title" id="title" placeholder="title">
<input type="text" name="description" id="description" placeholder="description">
<input type="date" name="date" id="date" placeholder="Due Date">


<select name="priority"> 
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="high">Low</option>
</select>
<button type="submit" id="submit-buton">Add Project</button>

`;

projectInput.insertAdjacentHTML('afterbegin', projectInputHtml); 
todoInput.insertAdjacentHTML('afterbegin', todoInputHtml);

addBtn.addEventListener('click', () => {
    input.appendChild(projectInput);
    main.appendChild(input);
});