function sumBeforeMin(arr) {
    let min = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    let sum = 0;
    for (let i = 0; i < minIndex; i++) {
        sum += arr[i];
    }

    return sum;
}

const numbers = [3.5, 2.1, 7.8, 1.0, 4.2];
console.log(sumBeforeMin(numbers));