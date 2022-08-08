function fibs(length) {
    let fib = [0, 1]
    if (length <= 0) return "Enter a valid number";
    if (length === 1) return [0];
    if (length === 2) return [0, 1];  

    for (let i = 2; i < length; i++) {
        newNum = fib[i - 1] + fib[i - 2];
        fib.push(newNum)
    };

    return fib;
}

console.log(fibs(1))
console.log(fibs(2))
console.log(fibs(3))
console.log(fibs(4))
console.log(fibs(8))

