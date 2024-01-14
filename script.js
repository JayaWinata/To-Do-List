const list = document.getElementById('list');

function addList(selected = false) {
    const element = document.createElement('li');
    const content = document.getElementById('input').value;
    if (content) {
        element.innerHTML = content;
        document.getElementById('list').appendChild(element);
        document.getElementById('input').value = '';
        element.addEventListener('click', () => {
            element.classList.toggle('selected');
        });
    }
}

document.getElementById('addButton').addEventListener('click',addList);
document.getElementById('input').addEventListener('keypress',(event) => {
    if (event.key === 'Enter') {
        addList();
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