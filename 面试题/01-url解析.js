export function url_parse(url, key) {
    let paramsString  = url.split('?')[1];
    if (!paramsString || paramsString.indexOf(key) < 0 || !key) {
        return null;
    }
    let value = '';
    let hash = paramsString.split('&');
    for(let i=0;i<hash.length;i++) {
        let [k,v] = hash[i].split('=');
        if (k === key) {
            // url中的字符一般是被转码了的，需要转回来
            v = decodeURIComponent(v);
            if (value) {
                // 考虑param对应多个value的情况
                value = [...value,v];
            }else {
                value = v;
            }
        }
    }
    return value;
}

let res = url_parse('http://witmax.cn/index.php?key0=0&key1=1&key2=2&key2=4','key2');

