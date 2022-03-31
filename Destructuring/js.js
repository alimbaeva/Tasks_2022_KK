console.log('1-задача');

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, department, position, salary] = arr;
console.log('name ', name)
console.log('surname ', surname)
console.log('department', department)
console.log('position ', position)
console.log('salary ', salary)

// =============

console.log('2-задача');

function func() {
    return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name1, surname1, department1, position1, salary1] = func()

console.log('name ', name1)
console.log('surname ', surname1)
console.log('department', department1)
console.log('position ', position1)
console.log('salary ', salary1)

// ================

console.log('3-задача');

let arr3 = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [, , department2, position2,] = arr3

console.log('department', department2)
console.log('position ', position2)

// ==============

console.log('4-задача');

let arr4 = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name3, surname3, ...salary3] = arr4

console.log('name3', name3)
console.log('surname3 ', surname3)
console.log('salary3 ', salary3)

// ==============

console.log('5-задача');

let arr5 = ['Иван', 'Иванов', 'отдел разработки'];

let [name4, surname4, department4, position4 = 'джуниор'] = arr5

console.log('name3', name4)
console.log('surname3 ', surname4)
console.log('department4 ', department4)
console.log('position4 ', position4)


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