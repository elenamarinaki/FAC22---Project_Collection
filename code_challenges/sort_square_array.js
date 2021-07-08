// Write a function that takes a sorted array of integers (in ascending order) and returns a new array of the same length with the squares of the original array, again sorted in ascending order.
// For example:
// sortSquaredArray([-2, -1, 3]);
// expected result => [1, 4, 9]


// with MAP
function sortSquaredArrayMap(array) {
    const arrSquare = array.map(item => item ** 2);
    return arrSquare.sort((a, b) => a - b);
}

// sortedSquaredArray([-5, -4, -3, -2, -1]);
sortSquaredArrayMap([-7, -3, 1, 9, 22, 30]);


// with for... loop
function sortSquaredArray(array) {
    const arrSquare = [];

    for(let i = 0; i < array.length; i++) {
        arrSquare.push(array[i]**2);
    }
    arrSquare.sort((a, b) => a - b);


    console.log(arrSquare);
}

sortSquaredArray([-7, -3, 1, 9, 22, 30]);