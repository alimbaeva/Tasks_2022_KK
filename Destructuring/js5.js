// ==============

console.log('6-задача');

let arr6 = [2025, , 31];

function func2() {
    let year = (new Date).getFullYear();

    return year
}
function func3() {
    let month = (new Date).getMonth();
    return month
}
function func4() {
    let date = (new Date).getDate();
    return date
}

let [year1 = func2(), month1 = func3(), day1 = func4()] = arr6;

console.log(year1)
console.log(month1)
console.log(day1)