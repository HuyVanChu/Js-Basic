// https://fullstack.edu.vn/learning/javascript-co-ban?id=2261
/**
 * math.pi tra ve so pi
 * 
 * 
 * 
 * 
 */

console.log(Math.pi()); // 3.14
console.log(Math.round()); // 1.49 -> 1. lam tron so
console.log(Math.abs()); // tra ve gtri tuyet doi. bien so am thanh so duong
console.log(Math.ceil(4.1)); // 4.1 -> 5. Lam tron tren
console.log(Math.floor(4.1)); // 4.1 -> 4. Lam tron duoi
console.log(Math.random()); // tao so ngau nhien (so thap phan)
console.log(Math.floor(Math.random() * 100)); // tao so ngau nhien

var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]);

console.log(Math.min(4,5,6,7)); // tra ve so nho nhat
console.log(Math.max(4,5,6,7)); // tra ve so nho nhat

