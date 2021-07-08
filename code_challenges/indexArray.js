function indexArray(arr, el) {
    const indexArr = [];
    let adj = 0;

    for (let i = 0; i < arr.length; i++) {
       let idx = arr.findIndex(e => e === el);

       if (idx !== -1) {
        indexArr.push(idx + adj);
        arr.splice(idx, 1);
        i--;
        adj++;
       }

       if (!arr.includes(el)) break;
    }
    return indexArr;
}


// indexArray([3, 5, 6, 7, 3, 6, 3, 4, 8, 3, 3, 5], 3);
// indexArray(['dog', 'cat', 'dog', 'horse', 'elephant', 'dog', 'aligator', 'duck', 'unicorn', 'dog', 'rabbit', 'squirel', 'starfish', 'dog', 'duck', 'parrot', 'cat', 'bird', 'dog', 'tiger', 'elephant'], 'dog');
indexArray(['dog', 'cat', 'dog', 'horse', 'elephant', 'dog'], 'dog');