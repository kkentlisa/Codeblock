function setupDraggable(element) {
    if (typeof interact === 'undefined') return;

    interact(element).draggable({
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        onmove: function(event) {
            const target = event.target;

            const newX = (parseFloat(target.style.left) || 0) + event.dx;
            const newY = (parseFloat(target.style.top) || 0) + event.dy;

            target.style.left = newX + 'px';
            target.style.top = newY + 'px';

            if (typeof blocksInWorkSpace !== 'undefined') {
                const blockId = parseInt(target.dataset.id);
                const block = blocksInWorkSpace.find(b => b.id === blockId);
                if (block) {
                    block.position.x = newX;
                    block.position.y = newY;

                    SaveBlocksToStorage();
                }
            }
        }
    });
}