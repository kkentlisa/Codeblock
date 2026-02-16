const workspace = document.querySelector('.workSpace');

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
                }
            }
        }
    });
}
function renderBlock(blockData) {
    const block = document.createElement('div');

    block.classList.add('block');
    block.classList.add(`block-${blockData.type}`);

    block.style.position = 'absolute';
    block.style.left = blockData.position.x + 'px';
    block.style.top = blockData.position.y + 'px';

    block.dataset.id = blockData.id;

    const typeNames = {
        'start': 'Старт',
        'variableInit': 'Переменная',
        'assignValue': 'Присвоить',
        'assignArithmeticBlock': 'Вычислить',
        'add': 'Сложение',
        'subtract': 'Вычитание'
    };
    block.textContent = typeNames[blockData.type] || blockData.type;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✕';
    deleteBtn.style.position = 'absolute';
    deleteBtn.style.top = '5px';
    deleteBtn.style.right = '5px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.color = '#ff4444';
    deleteBtn.style.fontWeight = 'bold';

    deleteBtn.onclick = function(e) {
        e.stopPropagation();

        const index = blocksInWorkSpace.findIndex(b => b.id === blockData.id);
        if (index !== -1) {
            blocksInWorkSpace.splice(index, 1);
        }

        block.remove();
    };

    block.appendChild(deleteBtn);

    return block;
}

function renderAllBlocks(blocksArray) {
    if (!workspace) return;

    workspace.innerHTML = '';

    blocksArray.forEach(blockData => {
        const blockElement = renderBlock(blockData);
        workspace.appendChild(blockElement);
        setupDraggable(blockElement);
    });
}
function setupBlockButtons() {
    const buttons = document.querySelectorAll('.block-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;
            const x = 50 + Math.random() * 300;
            const y = 50 + Math.random() * 200;

            const newBlock = createBlock(type, x, y);

            const blockElement = renderBlock(newBlock);
            workspace.appendChild(blockElement);
            setupDraggable(blockElement);
        });
    });
}
window.addEventListener('load', function() {
    if (typeof blocksInWorkSpace !== 'undefined' && blocksInWorkSpace.length > 0) {
        renderAllBlocks(blocksInWorkSpace);
    }
    setupBlockButtons();
});