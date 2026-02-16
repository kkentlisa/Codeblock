let blocksInWorkSpase = [];
let blockId = 0;

function createBlock(type, x, y){
    let data = {};

    if (type === "start"){
        data.childBlocks = [];
    }

    else if (type === "variableInit"){
        data.name = "";
        data.value = 0;
    }

    else if (type === "assignValue"){
        data.variable = "";
        data.value = "";
    }

    else if (type === "assignArithmeticBlock"){
        data.variable = "";
        data.arithmeticBlock = null;
    }

    else if (type === "add"){
        data.left = "";
        data.right = "";
    }

    else if (type === "subtract"){
        data.left = "";
        data.right = "";
    }

    else if (type === "multiply"){
        data.left = "";
        data.right = "";
    }

    else if (type === "div"){
        data.left = "";
        data.right = "";
    }

    else if (type === "mod"){
        data.left = "";
        data.right = "";
    }

    else if (type === "if"){
        data.condition = null;
        data.thenBlocks = [];
    }

    else if (type === "ifElse"){
        data.condition = null;
        data.thenBlocks = [];
        data.elseBlocks = [];
    }

    else if (type === "gt"){
        data.left = "";
        data.right = "";
    }

    else if (type === "lt"){
        data.left = "";
        data.right = "";
    }

    else if (type === "eq"){
        data.left = "";
        data.right = "";
    }

    else if (type === "neq"){
        data.left = "";
        data.right = "";
    }

    else if (type === "gte"){
        data.left = "";
        data.right = "";
    }

    else if (type === "lte"){
        data.left = "";
        data.right = "";
    }

    else if (type === "and"){
        data.left = "";
        data.right = "";
    }

    else if (type === "or"){
        data.left = "";
        data.right = "";
    }

    else if (type === "not"){
        data.operand = "";
    }

    else if (type === "while"){
        data.condition = null;
        data.bodyBlocks = [];
    }

    else if (type === "arrayDeclare"){
        data.name = "";
        data.size = 3;
        data.elements = [];
    }

    else if (type === "arrayAssignByIndex"){
        data.name = "";
        data.index = "";
        data.value = "";
    }

    else if (type === "arrayGet"){
        data.name = "";
        data.index = "";
    }

    else if (type === "arrayLength"){
        data.name = "";
    }

    return{
        id: blockId++,
        type: type,
        position: {x: x, y: y},
        data: data
    }
}