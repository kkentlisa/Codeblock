const variables = {};

function SetVariable(name, value) {
    variables[name] = value;
}

function GetVariable(name) {
    return variables[name];
}

function evaluateBlock(block) {
    if (block.type === "input") {
        const value = block.data.value;
        if (isNaN(value)) {
            return GetVariable(value);
        }
        else
            return Number(value);
    }

    if (block.type === "add") {
        const leftValue = evaluateBlock(block.data.left);
        const rightValue = evaluateBlock(block.data.right);
        return leftValue + rightValue;
    }

    if (block.type === "subtract") {
        const leftValue = evaluateBlock(block.data.left);
        const rightValue = evaluateBlock(block.data.right);
        return leftValue - rightValue;
    }

    if (block.type === "multiply") {
        const leftValue = evaluateBlock(block.data.left);
        const rightValue = evaluateBlock(block.data.right);
        return leftValue * rightValue;
    }

    if (block.type === "div") {
        const leftValue = evaluateBlock(block.data.left);
        const rightValue = evaluateBlock(block.data.right);

        if (rightValue === 0) {
            // пока просто вывод в консоль
            console.log("Деление на 0!")
            return
        }

        return Math.floor(leftValue / rightValue);
    }

    if (block.type === "mod") {
        const leftValue = evaluateBlock(block.data.left);
        const rightValue = evaluateBlock(block.data.right);

        if (rightValue === 0) {
            // пока просто вывод в консоль
            console.log("Деление на 0!")
            return
        }

        return leftValue % rightValue;
    }
}
