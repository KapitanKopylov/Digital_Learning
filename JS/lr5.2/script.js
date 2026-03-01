function findSaddlePoints(matrix) {
    let saddlePoints = [];

    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        let rowMin = matrix[i][0];
        for (let j = 0; j < cols; j++) {
            if (rowMin > matrix[i][j]) {
                rowMin = matrix[i][j];
            }
        }

        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === rowMin) {
                let isColMax = true;
                for (let k = 0; k < rows; k++) {
                    if (matrix[k][j] > matrix[i][j]) {
                        isColMax = false;
                        break;
                    }
                }

                if (isColMax) {
                    saddlePoints.push({row: i, col: j});
                }
            }
        }
    }
    return saddlePoints;
}

const A = [
    [0.9, 0.6, 0.9],
    [0.1, 0.2, 0.4],
    [0, 0.1, 0.2]
];

console.log(findSaddlePoints(A).map(p=>`${p.row+1},${p.col+1}`).join());