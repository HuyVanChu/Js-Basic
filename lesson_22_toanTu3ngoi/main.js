var course = {
    name: 'Js',
    coin: 280
}
// if (course.coin>0) {
//     console.log('Tra phi');
// } else {
//     console.log('Mien phi');
// }

var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien Phi';
console.log(result);