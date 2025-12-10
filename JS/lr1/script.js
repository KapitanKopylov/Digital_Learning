// 1
function isPrime(n){
    if (n <= 1) {
        return false
    } else {
        for (let i = 2; i <= n/2; i++){
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}
let n = Number(prompt("Enter a number"));

console.log(isPrime(n));

// 2
function isAutomorphic(n) {
    return (n ** 2) % (10 ** (n.toString().length)) === n;
}
let a = Number(prompt("Enter a left edge"));
let b = Number(prompt("Enter a right edge"));

for (let i = a; i < b+1; i++) {
    if (isAutomorphic(i)){
        console.log(i);
    }
}

// 3
function sigmaFunction(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum;
}

function isPerfect(n) {
    return sigmaFunction(n) === 2*n;
}

let x = Number(prompt("Enter a number"));

console.log(isPerfect(x));

// 4

function isAbundant(n) {
    let sum = 0
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum > n;
}

x = Number(prompt("Enter a number"));

console.log(isAbundant(x));


// 5
function isNonHypotenuse(n) {
    for (let i = 1; i <= n; i++){
        for (let j = i; j <= n; j++){
            if (i**2 + j**2 === n**2) {
                return false;
            }
        }
    }
    return true;
}

let c = Number(prompt("Enter a number"));

console.log(isNonHypotenuse(c));

// 6
function isArmstrong(n) {
    let length = n.toString().length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += n.toString()[i]**length;
    }
    return sum === n;
}

a = Number(prompt("Enter a left edge"));
b = Number(prompt("Enter a right edge"));

for (let i = a; i < b + 1; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}

// 7
function pythagoreanTriples(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            if (i ** 2 + j ** 2 === n ** 2) {
                console.log(i, j, n);
            }
        }
    }
}

n = Number(prompt("Enter a number"));

for (let i = 1; i <= n; i++) {
    pythagoreanTriples(i);
}
