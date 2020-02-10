function IsPopOrder(pushV, popV)
{
    const stack = [];
    let flag = false;
    while (pushV.length || stack.length) {
        while (stack[stack.length-1] === popV[0] && stack.length) {
            stack.pop();
            popV.shift();
        }
        if (!popV.length) {
            flag = true;
        }
        if (!pushV.length) {
            break;
        }
        stack.push(pushV.shift());
    }
    return flag;
}

console.log(IsPopOrder([1, 2, 3, 4], [4, 3, 2, 1]));

console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));

console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));

module.exports = {
    IsPopOrder : IsPopOrder
};
