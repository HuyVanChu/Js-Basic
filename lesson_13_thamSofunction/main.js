// https://fullstack.edu.vn/learning/javascript-co-ban?id=2114
function witeLog() {
    var myString = '';
    for (var param of arguments) {
        // myString += param + ' - ';
        myString += `${param} - `;
    }
    console.log(myString)
}
witeLog('PHP', 'Js', 'Vue');