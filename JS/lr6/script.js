function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);

    const common = arr2.filter(el => set1.has(el));
    return [...new Set(common)];
}

const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [3, 4, 4, 5, 6];

console.log(findCommonElements(array1, array2).join());