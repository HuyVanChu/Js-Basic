// https://fullstack.edu.vn/learning/javascript-co-ban?id=2147
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
courses.forEach(function (course,index) {
    // console.log(course,index);
})

// Ktra all phan tu mang thoai man dk nao do
// dung lai khi tim thay 1 phan tu thoa man dk
// VD: user hoc xog khoa hoc thi moi cho hoc tiep
var isFree = courses.every(function (course,index) {
    return course.coin === 0; // co khoa != 0 nen false
})
console.log(isFree);

/**
 * Mot phan tu khoa man dk la tra ra kq
 */
var isFree_some = courses.some(function (course,index) {
    return course.coin === 0; // co khoa != 0 nen false
})
console.log(isFree_some);

/**
 * tra ve 1 doi tuong
 * Tim phan tu array, thay cai dau tien -> dung lai
 */
var isFree_find = courses.find(function (course,index) {
    return course.name === "PHP"; // co khoa != 0 nen false
})
console.log(isFree_find);
/**
 * tra ve all doi tuong
 * Tim phan tu array
 */
var isFree_filter = courses.filter(function (course,index) {
    return course.name === "PHP"; // co khoa != 0 nen false
})
console.log(isFree_filter);
