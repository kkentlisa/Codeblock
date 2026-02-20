const variables = {};

function SetVariable(name, value) {
    variables[name] = value;
}

function GetVariable(name) {
    return variables[name];
}

function evaluateExpression(block) {
    if (block.type === "input") {
        const value = block.data.value;
        if (isNaN(value)) {
            return GetVariable(value);
        }
        else
            return Number(value);
    }

    else if (block.type === "add") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue + rightValue;
    }

    else if (block.type === "subtract") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue - rightValue;
    }

    else if (block.type === "multiply") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue * rightValue;
    }

    else if (block.type === "div") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);

        if (rightValue === 0) {
            // пока просто вывод в консоль
            console.log("Деление на 0!")
            return 0;
        }

        return Math.floor(leftValue / rightValue);
    }

    else if (block.type === "mod") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);

        if (rightValue === 0) {
            // пока просто вывод в консоль
            console.log("Деление на 0!")
            return 0;
        }

        return leftValue % rightValue;
    }
}

function EvaluateCondition(block) {
    if (block.type === "gt") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue > rightValue;
    }

    else if (block.type === "lt") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue < rightValue;
    }

    else if (block.type === "eq") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue === rightValue;
    }

    else if (block.type === "neq") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue !== rightValue;
    }

    else if (block.type === "gte") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue >= rightValue;
    }

    else if (block.type === "lte") {
        const leftValue = evaluateExpression(block.data.left);
        const rightValue = evaluateExpression(block.data.right);
        return leftValue <= rightValue;
    }

    else if (block.type === "and") {
        const leftValue = EvaluateCondition(block.data.left);
        const rightValue = EvaluateCondition(block.data.right);
        return leftValue && rightValue;
    }

    else if (block.type === "or") {
        const leftValue = EvaluateCondition(block.data.left);
        const rightValue = EvaluateCondition(block.data.right);
        return leftValue || rightValue;
    }

    else if (block.type === "not") {
        const operandValue = EvaluateCondition(block.data.operand);
        return !operandValue;
    }
}
