const list = document.getElementById('list');

function addList(value, selected = false) {
    const element = document.createElement('li');
    if (value) {
        element.innerHTML = value;
        document.getElementById('list').appendChild(element);
        document.getElementById('input').value = '';
        element.addEventListener('click', () => {
            element.classList.toggle('selected');
        });
    }
}

document.getElementById('addButton').addEventListener('click', () => {
    addList(document.getElementById('input').value);
});
document.getElementById('input').addEventListener('keypress',(event) => {
    if (event.key === 'Enter') {
        addList(document.getElementById('input').value);
    }
})

function clearSelectedItems() {
    const selected = list.getElementsByClassName('selected');
    while (selected.length > 0) {
        selected.item(0).remove();
    }
}

document.getElementById('csButton').addEventListener('click',clearSelectedItems);

function emptyList() {
    const listChild = list.getElementsByTagName('li');
    while (listChild.length > 0) {
        listChild.item(0).remove();
    }
}

document.getElementById('elButton').addEventListener('click',emptyList);

function saveList() {
    const todos = [];
    for (let i = 0; i < list.children.length; i++) {
        let todo = list.children.item(i);
        let todoObj = {
            'task': todo.innerHTML,
            'completed': todo.classList.contains('selected')
        };
        todos.push(todoObj);
    }
    localStorage.setItem('todos',JSON.stringify(todos));
}

document.getElementById('slButton').addEventListener('click', () => {
    saveList();
    alert('To-Do List Saved');
})

function loadList() {
    if (localStorage.getItem('todos')) {
        const todos = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < todos.length; i++) {
            addList(todos[i].task,todos[i].completed);
        }
    }
}

loadList();