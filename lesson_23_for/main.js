/**
 * for: lap voi dieu kien dung
 * for/in: Lap qua key cua doi tuwon
 * for/of: lap qua value cua doi tuong
 * while: lap qua dieu kien cua doi tuong
 * do/while: lap it nhat 1 lan, 
 * sau do lap khi dk dung
 */

// for
var KhoaHoc = [
    'PHP',
    'Vue',
    'Js'
];
var dsKhoahoc = KhoaHoc.length;
for (var index = 0; index < dsKhoahoc; index++) {
    console.log(KhoaHoc[index]);
}

// for/in
var myInfo = {
    name: 'Huy van',
    age: 23,
    address: 'Hung Yen'
}
for (var index in myInfo){
    console.log(myInfo[index])
}
for (var index in KhoaHoc){
    console.log(KhoaHoc[index])
}
var myFullName = "Chu Van Huy";
for (let index = 0; index < myFullName.length; index++) {
    console.log(myFullName[index]);
    
}

// for/of 
// khong chap chan object
for (var value of KhoaHoc) {
    console.log(value);
}
