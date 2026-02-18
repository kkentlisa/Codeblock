const workspace = document.querySelector('.workSpace');

function renderBlock(blockData) {
    const container = document.createElement('div');

    container.className = 'block-container';
    container.dataset.id = blockData.id;
    container.style.position = 'absolute';
    container.style.left = blockData.position.x + 'px';
    container.style.top = blockData.position.y + 'px';

    const block = document.createElement('div');

    block.classList.add('block');
    block.classList.add(`block-${blockData.type}`);

    block.dataset.id = blockData.id;

    const typeNames = {
        'input': 'Ввод',
        'variableInit': 'Объявить переменную',
        'assignValue': 'Присваивание',
        'if': 'Условие if',
        'while': 'Цикл while',
    };
    block.textContent = typeNames[blockData.type] || blockData.type;

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '✖';

    container.appendChild(deleteBtn);
    container.appendChild(block);

    deleteBtn.onclick = function(e) {
        e.stopPropagation();
        DeleteBlock(blockData.id);
        container.remove();
    };

    return container;
}

function renderAllBlocks(blocksArray) {
    if (!workspace) return;

    const blocks = workspace.querySelectorAll('.block-container');
    blocks.forEach(block => block.remove());
    
    blocksArray.forEach(blockData => {
        const containerElement = renderBlock(blockData);
        workspace.appendChild(containerElement);
        setupDraggable(containerElement);
    });
}