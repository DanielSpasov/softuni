function arrayManipulation(input) {
    let arr = input.shift().split(' ').map(Number)

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(' ')

        firstNum = +firstNum
        secondNum = +secondNum

        switch (command) {
            case 'Add':
                add(firstNum)
                break
            case 'Remove':
                remove(firstNum)
                break
            case 'RemoveAt':
                removeAt(firstNum)
                break
            case 'Insert':
                insert(firstNum, secondNum)
                break
        }
    }
    function add(el) {
        arr.push(el)
    }
    function remove(num) {
        arr = arr.filter(el => el !== num)
    }
    function removeAt(index) {
        arr.splice(index, 1)
    }
    function insert(num, index) {
        arr.splice(index, 0, num)
    }
    console.log(arr.join(' '))
}

arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
