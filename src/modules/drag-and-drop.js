export const dragAndDrop = () => {
    /* draggable element */
const item = document.querySelector('.drag-ship');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    console.log(e);
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hidden');
    }, 0);
}


/* drop targets */
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('dragenter', dragEnter)
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    console.log(e.dataTransfer);

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.classList.add("has-ship");

    // display the draggable element
    draggable.classList.remove('hidden');
}
}