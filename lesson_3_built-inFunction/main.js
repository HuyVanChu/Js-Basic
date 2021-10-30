/**
 * La ham dc xay dung san
 * Alert
 * Console
 * Confile
 * Prompt
 * Set timeout
 */
console.log('Huy Van')
console.log(123)
var fullName = "Chu Van Huy";
console.log(fullName);

// Mo hop thoai co nut Can
confirm('Ham confirm');
// mo hop thoai va co input nhap
prompt('Nhap Ten:');
// Doan code chay sau 1 khoang thoi gian
setTimeout(function () {
    alert('Ham set timeOut');
}, 1000)
// set interval
// Doan code chay sau 1 khoang thoi gian
// chay lien tuc sau thoi gian quy dinh
setInterval(function () {
    alert('Ham set interval');
},1000)
