// ==============

console.log("Задача 6")

function func6({ color = 'black', width, height }) {
    console.log(color, width, height)
}

func6({ width: 400, height: 500 });