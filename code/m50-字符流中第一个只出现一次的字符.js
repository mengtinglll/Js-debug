//Init module if you need
let map;
function Init()
{
    // write code here
   map = new Map();
}
//Insert one char from stringstream
function Insert(ch)
{
    // 建立哈希表,每次进来字符更新
    let counts = map.get(ch);
    if (!counts) {
        map.set(ch,1);
    } else {
        map.set(ch,counts+1);
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // 得到结果
    for(let key of map.keys()) {
        if (map.get(key) === 1) {
            return key;
        }
    }
    return '#';
}
