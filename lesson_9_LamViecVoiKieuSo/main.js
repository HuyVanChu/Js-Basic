// https://fullstack.edu.vn/learning/javascript-co-ban?id=2701
// Đối tượng Number
// Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:

// Phương thức	Vai trò
// Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi


var otherNumber = new String(18);// la 1 doi tuong -> object
var age = 3.15; // la 1 so
var result = 20 / 'abc'; // NaN: So khong hop le
console.log(isNaN(result)); // Check co phai NaN
// Chuyen so thanh chuoi
console.log(age.toString());
console.log(typeof age.toString()); 
// lam tron so
console.log(typeof age.toFixed()); // kq: 3. Lam tron so, tu 3.49 -> 3

