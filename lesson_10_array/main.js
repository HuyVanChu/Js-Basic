// https://fullstack.edu.vn/learning/javascript-co-ban?id=2111
var laguages_1 = 'JS';
var laguages_2 = 'PHP';
var laguages_3 = 'Ruby';

var languages = [
    'Js',
    'PHP',
    'Ruby',
    null,
    function () {
        
    },
    undefined
]
var arrayLanguage = new Array(
    'Js',
    'PHP',
    'Ruby',
    null,
    function () {
        
    },
    undefined
)
console.log(languages);
console.log(Array.isArray(languages)); // Ktra co phai array

// Truy xuat mang
console.log(languages.length); // Dem phan tu mang
console.log(languages[0]); // Lay gtri mang
