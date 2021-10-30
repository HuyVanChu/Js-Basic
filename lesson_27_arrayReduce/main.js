// https://fullstack.edu.vn/learning/javascript-co-ban?id=2241
//  giai thich reduce https://fullstack.edu.vn/learning/javascript-co-ban?id=2704
var courses = [
    {
        id: 1,
        name: 'PHP',
        coin:250
    },
    {
        id: 2,
        name: 'Vue',
        coin: 0,
    },
    {
        id: 3,
        name: 'Js',
        coin: 150,
    },

];
// reduce: muon nhan lai 1 gia tri khi dc tinh toan trong mang
// vd: tinh tong tien khoa hoc

/**
 * accumulator: gia tri ban dau dc tinh = 0  => (coinHandler, 0)
 * currentValue: Gia tri cua phan tu
 * currenIndex: Vi tri cua phan tu
 * orihinArray: Nguyen ban cua phan tu
 */

// Vi du
var i = 0;
function coinHandler(accumulator, currentValue, currenIndex,orihinArray) {
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        'Luot chay: ': i,
        'Bien tich tru: ': accumulator,
        'Gia khoa hoc: ': currentValue.coin,
        'Tich tru duoc: ': total
    });
    return total;
}
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);

// Lam bai tinh tong gia tien khoa hoc
var totalCoin_1 = courses.reduce(function (total, giakhoahoc) {
    // console.log(accumulator);
    return total + giakhoahoc.coin;
    
}, 0);
console.log(totalCoin_1);


// Flat - "lam phang mang"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flastOutfut, depthItem) {
    return flastOutfut.concat(depthItem);
}, []);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Lay ra cac khoa hoc va dua vao phan tu moi
var topic = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML-CSS'
            },
            {
                id: 2,
                title: 'JavaScript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'Java'
            }
        ]
    },
];
var newCourses = topic.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, [])
console.log(newCourses);

var htmls = newCourses.map(function (course) {
    return `
        <div>
            <h2>${course.title} </h2>
            <p>ID: ${course.id} </p>
        </div>
    `;
});
console.log(htmls.join(''));


// tinh tong phan tu mang
const number = [1, 2, 3, 4, 5];
const result = number.reduce(function (callback, initialValue) {
    return callback + initialValue;
}, 0);
console.log(result);