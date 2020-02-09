let stack = [],
    minstack = [];

function push(item) {
    const minLength = minstack.length;
    stack.push(item);
    if (minLength === 0) {
        minstack.push(item);
    } else {
        if (item < minstack[minLength - 1]) {
            minstack.push(item);
        } else {
            minstack.push(minstack[minLength-1]);
        }
    }
}

function pop() {
    if (stack.length === 0) {
        return null;
    } else {
        minstack.pop();
        return stack.pop();
    }
}
function top() {
    if (stack.length === 0) {
        return null;
    }
    return stack[stack.length - 1];
}

function min() {
    if (minstack.length === 0) {
        return null;
    } else {
        return minstack[minstack.length - 1];
    }
}

stack.push(3);
stack.push(4);
stack.push(2);
stack.push(1);
console.log(stack.min());
