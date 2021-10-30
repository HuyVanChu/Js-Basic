// https://fullstack.edu.vn/learning/javascript-co-ban?id=2112

/**
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Contat
 * 9. Slicing
 */

var languages = [
    'Js',
    'PHP',
    'Ruby',
]
var languages_2 = [
    'C#',
]
console.log(languages.toString()); // Chuyen  array sang chuoi
console.log(languages.join('-')); // Khac vs toString la dat duoc dau ngan cach 
console.log(languages.pop()); // Xoa phan tu "CUOI CUNG" mang
console.log(languages.push('Dart','java')); // them 1 hoac nhieu phan tu cuoi mang
console.log(languages.shift()); // Xoa phan tu "DAU TIEN" mang
console.log(languages.unshift('Ahii')); // them 1 hoac nhieu phan tu dau mang
console.log(languages.splice(1, 1)); // xoa phan tu mang, tham so 1: vi tri muon xoa, tham so 2: so phan tu muon xoa
console.log(languages.splice(1, 1, 'Thay'));
    // xoa phan tu mang, tham so 3: phan tu muon them khi da xoa phan tu
    // Vd: trong Js, PHP, Ruby. Xoa PHP -> Js, thay, Ruby
console.log(languages.splice(1, 0, 'Thay')); // khong xoa phan tu mang, // Vd: trong Js, PHP, Ruby -> Js,Thay, PHP, Ruby 
console.log(languages.concat(languages_2)); // Noi array
console.log(languages.slice(1,2)); // cat phan tu mang, ts1: vi tri cat, ts2: vi tri dung

console.log(languages);