function fibsRec(length) {
    if (length <= 0) return "Enter valid number, please";
    if (length === 1) return [0];
    if (length === 2) return [0, 1];

    return [...fibsRec(length - 1), fibsRec(length - 1)[length - 2] + fibsRec(length-1)[length - 3]]
}


console.log(fibsRec(-1))
console.log(fibsRec(1))
console.log(fibsRec(3))
console.log(fibsRec(5))
console.log(fibsRec(8))