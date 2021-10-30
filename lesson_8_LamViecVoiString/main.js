// https://fullstack.edu.vn/learning/javascript-co-ban?id=2109
// key: javascrip string method
var myString = "hoc Js tai Js F8!";
// 1 length
console.log(myString.length); // Dem ky tu
// 2. find index
console.log(myString.indexOf('Js')); // Tim vi tri chuoi dau tien tim dc -> 4. Neu khong tim thay tra ve -1
console.log(myString.indexOf('Js', 6)); // vi tri 11. 6: vi tri muon tim
console.log(myString.lastIndexOf('Js')); // tim vi tri cuoi cung cua chuoi
console.log(myString.search('Js')); // khac vs indexOf o cho. Ko co tham so thu 2, va nos tim kiem dc bieu thuc chinh quy
// 3. Cut String
// cat tu phai sang
console.log(myString.slice(4, 6)); // Js
console.log(myString.slice(4)); // Js tai Js F8
console.log(myString.slice(0)); // hoc Js tai Js F8
// cat tu trai sang
console.log(myString.slice(-3, -1)); // F8
// 4. Replace
console.log(myString.replace('Js', 'Hoc Js')); // hoc Hoc Js tai Js F8!
console.log(myString.replace(/Js/g, 'Hoc Js')); // hoc Hoc Js tai Hoc Js F8!
// 5. Conver to upper case
console.log(myString.toUpperCase()); // HOC JS Tai JS F8!
// 6. Conver to lower case
console.log(myString.toLowerCase()); // hoc js tai js f8!
// 7. Trim
console.log(myString.trim()) // xoa khoang trang
console.log(myString.trim().length) // 14  check do dai khi cat
// 8. Split
var languages = 'Js, PHP, Ruby';
console.log(languages.split(', ')); // tach chuoi thanh mang -> ['js','PHP','Ruby']
var vd_languages = 'huy';
console.log(vd_languages.split('')); // ['h','u','y']

// 9. Get a character by index : lay dc ky tu boi ky tu cho trc
const myString2 = "Van Huy";
console.log(myString2.charAt(1)); // a
console.log(myString2[1]); // a





