console.log("-index.js-");


//--------------------------------------------------
// using DOM API
//--------------------------------------------------

let box = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');


showBtn.addEventListener('click', e => {
    box.style.display = 'block'
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})


//--------------------------------------------------
// using DOM + XHR / Fetch API
//--------------------------------------------------

let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {
    let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(apiUrl)
    promise
        .then(response => response.json())
        .then(todos => {
            let liElements = todos.map(todo => {
                return `
                <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">${todo.id} - ${todo.title} - ${todo.completed}</li>
                `
            })
            document.getElementById('todo-list').innerHTML = liElements.join(" ")
        })
})




//--------------------------------------------------
// using DOM + Timer API
//--------------------------------------------------

let timeEle = document.getElementById('time')
setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString('en-Us', { timeZone: 'Asia/Kolkata' })
}, 1000);