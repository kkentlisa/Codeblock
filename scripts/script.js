const workspace = document.querySelector('.workSpace');

function createTestBlock() {
    if (!workspace) return null;

    const block = document.createElement('div');

    block.style.width = '150px';
    block.style.height = '80px';
    block.style.backgroundColor = '#3498db';
    block.style.borderRadius = '8px';
    block.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
    block.style.position = 'absolute';
    block.style.left = '50px';
    block.style.top = '50px';
    block.style.cursor = 'move';
    block.style.color = 'white';
    block.style.display = 'flex';
    block.style.alignItems = 'center';
    block.style.justifyContent = 'center';
    block.style.fontFamily = 'Arial, sans-serif';
    block.style.fontWeight = 'bold';
    block.textContent = 'тестовый блок';

    workspace.appendChild(block);
    return block;
}

function setupDraggable(element) {
    if (typeof interact === 'undefined') return;

    interact(element).draggable({
        onmove: function(event) {
            const target = event.target;
            target.style.left = (parseFloat(target.style.left) || 0) + event.dx + 'px';
            target.style.top = (parseFloat(target.style.top) || 0) + event.dy + 'px';
        }
    });
}

window.addEventListener('load', function() {
    const testBlock = createTestBlock();
    if (testBlock && typeof interact !== 'undefined') {
        setupDraggable(testBlock);
    }
});