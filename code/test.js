
let str = '{"status.display": "0"}';
print(str.match(/\"\D{1,}?\"/i))