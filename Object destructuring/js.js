
console.log('1-task')

let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let { color, width, height } = options

console.log(color, width, height)

// ================


console.log('2-task')

let options1 = {
    color1: 'red',
    width1: 400,
    height1: 500,
};

let { color1: c, width1: w, height1: h } = options1

console.log(c, w, h)

// ================


console.log('3-task')

let options2 = {
    width2: 400,
    height2: 500,
};

let { color2 = "green", width2, height2 } = options2

console.log(color2, width2, height2)

// ================


console.log('4-task')

let options3 = {
    width3: 400,
    height3: 500,
};

let { color3: cc = "black", width3: ww, height3 } = options3

console.log(cc, ww, height3)