function solve(input) {

    for (let i = 0; i < input.length - 1; i++) {
        let sumROne = input[i].reduce((a, b) => a + b, 0)
        let sumRTwo = input[i + 1].reduce((a, b) => a + b, 0)
        let sumCOne = 0
        let sumCTwo = 0

        for (let j = 0; j < input.length; j++) {
            sumCOne += input[i][j]
            sumCTwo += input[i + 1][j]
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            return false
        }
    }

    return true
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])

solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]])

solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])