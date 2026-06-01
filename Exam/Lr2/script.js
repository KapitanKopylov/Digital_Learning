function maxBlock(str) {
    let blocks = str.split('0');

    let maxSum = -1;
    let maxBlock = "";

    for (let block of blocks) {
        let sum = 0;

        for (let digit of block) {
            sum += Number(digit);
        }

        if (sum > maxSum) {
            maxSum = sum;
            maxBlock = block;
        }
    }

    return [maxBlock, maxSum];
}