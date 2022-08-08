function merge(leftHalf, rightHalf) {
    let final = []
    console.log(leftHalf)

    while (leftHalf.length > 0 && rightHalf.length > 0) {
        let arrayWithLowest = (leftHalf[0] > rightHalf[0]) ? rightHalf : leftHalf;
        let lowestCurrentNumber = arrayWithLowest.shift();
        final.push(lowestCurrentNumber);
    };

    // console.log(`This is ${final}`)
    return final.concat(leftHalf, rightHalf)
}

function mergeSort(array) {
    if (array.length < 2) return array;

    let arrayMidpoint = Math.floor(array.length / 2);
    let leftHalf = mergeSort(array.slice(0, arrayMidpoint));
    let rightHalf = mergeSort(array.slice(arrayMidpoint));
    return merge(leftHalf, rightHalf)
}

// console.log("Hi")
console.log(mergeSort([9, 3, 2, 8, 4, 1]))
