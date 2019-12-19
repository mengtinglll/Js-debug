// 第一种，直接用JS的正则表达式
function match(str, pattern)  {
    const reg = new RegExp(`${pattern}`);
    return reg.test(str);
}
//第二种，自己的代码实现
function match2(str, pattern) {
    if(str === null || pattern === null) {
        return false;
    }
    return matchCore(str, 0, pattern, 0);
}

function matchCore(str, iStr, pattern, iPattern) {
    if (iStr === str.length && iPattern === pattern.length) {
        return true;
    }
    if (iStr !== str.length && iPattern === pattern.length) {
        return false;
    }
    if (pattern[iPattern + 1] === '*') {
        if (pattern[iPattern] === str[iStr] || (pattern[iPattern] === '.' && str[iStr] !== undefined)) {
            return (
              matchCore(str, iStr + 1, pattern ,iPattern + 2) ||
              matchCore(str, iStr + 1, pattern ,iPattern) ||
              matchCore(str, iStr, pattern ,iPattern + 2)
            );
        }
        else {
            return matchCore(str, iStr, pattern ,iPattern + 2);
        }
    }
    if (pattern[iPattern] === str[iStr] || (pattern[iPattern] === '.' && str[iStr] !== undefined)) {
        return matchCore(str, iStr + 1, pattern ,iPattern + 1)
    }

}
let str = 'def'
let pattern = '.*f'
print(match2(str, pattern));
