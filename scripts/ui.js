function BlockButtonClick(){
    const buttons = document.querySelectorAll('.blockPanelButton');

    buttons.forEach(function(button){
        button.addEventListener('click', function(){

            const type = button.dataset.type;

            const {x, y} = GetRandomPositionInWorkspace();

            const newBlock = CreateBlock(type, x, y);

            const blockElement = renderBlock(newBlock);

            workspace.appendChild(blockElement);
            setupDraggable(blockElement);
        })
    });

}

function GetRandomPositionInWorkspace(){
    const workspace = document.querySelector('.workSpace');

    const rect = workspace.getBoundingClientRect();

    const padding = 20;

    const x = padding + Math.random()*(rect.width - 2 * padding - 100);
    const y = padding + Math.random()*(rect.height - 2 * padding - 50);

    return {x, y};

}

window.addEventListener('load', function() {
    if (typeof blocksInWorkSpace !== 'undefined' && blocksInWorkSpace.length > 0) {
        renderAllBlocks(blocksInWorkSpace);
    }
    BlockButtonClick();
})