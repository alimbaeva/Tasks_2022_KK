console.log("Задача 1")

function func([name, surname, department, position, salary]) {
    console.log(name, surname, department, position, salary);
}

console.log(func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]));

// ====================
console.log("Задача 2")

function func2([name, surname, info]) {
    console.log(name, surname, info);
}

console.log(func2(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]));

// ====================
console.log("Задача 3")

function func3([name, surname, department, position = 'джуниор']) {

    console.log(name, surname, department, position)
}


console.log(func3(['Иван', 'Иванов', 'отдел разработки']));


// ====================
console.log("Задача 4")


function func4(department, [name, surname], [year, month, day]) {
    console.log(department, name, surname, year, month, day)
}

console.log(func4('отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31]));

// ====================
console.log("Задача 5")

function func({ color, width, height }) {
    console.log(color, width, height)
}

func({ color: 'red', width: 400, height: 500 });


// ==============

console.log("Задача 6")

function func6({ color = 'black', width, height }) {
    console.log(color, width, height)
}

func6({ width: 400, height: 500 });