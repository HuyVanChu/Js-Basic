// https://fullstack.edu.vn/learning/javascript-co-ban?id=2119

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1; // vi thang tinh tu 0, nen phai + vs 1
var day = date.getDay();
var hours = date.getHours();

console.log(`${day} / ${month} / ${year}`)