function elementCount(arr, el) {
    let counter = 0;

    arr.forEach(element => {
        if (el === element) counter++;
    });

    return counter;
    // console.log(counter)
}


elementCount([3, 5, 6, 7, 3, 6, 3, 4, 8, 3, 3, 5], 3);
elementCount(['dog', 'cat', 'dog', 'horse', 'elephant', 'dog', 'aligator', 'duck', 'unicorn', 'dog', 'rabbit', 'squirel', 'starfish', 'dog', 'duck', 'parrot', 'cat', 'bird', 'dog', 'tiger', 'elephant'], 'dog');