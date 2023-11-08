export const dragAndDrop = () => {
    // Draggable container for the ship
    const shipContainer = document.querySelector('.drag-ship');

    shipContainer.addEventListener('dragstart', dragStart);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hidden');
        }, 0);
    }

    // Drop targets
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('dragenter', dragEnter);
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
        e.preventDefault();
        console.log(e.target);
        e.target.classList.remove('drag-over');

        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        e.target.appendChild(draggable);

        /* if (draggable.classList.contains('drag-ship')) {
            // Check if the target cell and the 4 following cells are empty
            const targetCellIndex = Array.from(cells).indexOf(e.target);
            const cellsToFill = Array.from(cells).slice(targetCellIndex, targetCellIndex + 5);

            if (cellsToFill.every(cell => !cell.classList.contains('has-ship'))) {
                // Add the entire ship to the 5 consecutive cells
                cellsToFill.forEach(cell => {
                    // cell.classList.add("has-ship");
                    cell.appendChild(draggable.cloneNode(true));
                });

                // Display the draggable element
                draggable.classList.remove('hidden');
            }
        }*/
    } 
}
