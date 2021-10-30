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
// map: thay doi, chinh sua phan tu mang
var newCourses = courses.map(function (courses) {
    return {
        id: courses.id,
        name: `Khoa hoc: ${courses.name}`,
        coin: courses.coin,
        coinText: `Gia: ${courses.coin}`
    };
});
console.log(newCourses);