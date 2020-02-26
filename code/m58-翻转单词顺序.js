// 借助js函数法
function ReverseSentence1(str) {
    if(str.length === 0) {
        return '';
    }
    // 整句所有字符反向
    const chars = str.split("").reverse();
    console.log(chars);
    // 每个单词内部反向
    let res = '';
    let words = [];
    for ( let c of chars) {
        if (c === ' ') {
          res += words.reverse().join('');
          res += ' ';
          words.length = 0;
        } else {
          words.push(c);
        }
    }
    res += words.reverse().join('');
    return res;
}
// 直接js函数法
function ReverseSentence2(str) {
    return str
        .split(' ')
        .reverse()
        .join(' ');
}


console.log(ReverseSentence1('i am a student.'));
