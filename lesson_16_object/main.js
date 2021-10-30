// https://fullstack.edu.vn/learning/javascript-co-ban?id=2118

// dinh nghia 1 key bang 1 bien
var passwordKey = 'password';

// object
var myInfo = {
    name: 'Van Huy', // goi la thuoc tinh/property
    age: 18,
    address: 'Hung Yen',
    [passwordKey]: 123,
    // luu value la 1 function
    getName: function name() { // goi la phuong thuc /method
        return this.name;
    }
};

// Them phan tu
myInfo.email = 'vanhuyutehy@gmail.com';
myInfo['my-email-2'] = 'vanhuyutehy@gmail.com';

// xoa key - value
delete myInfo.age;



console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['email']);
console.log(myInfo.getName());
