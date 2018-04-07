function bubbleSort(arr = []) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            for (let k = 0; k < arr.length - 1; k++) {
                if (arr[k] > arr[k + 1]) // 改成小于号即为从大到小排序
                    [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]]
            }
        }
    }
    console.log(arr)
    return arr;
}


function bubbleSort2() {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            for (let k = 0; k < arr.length - 1 - i ; k++) {
                if (arr[k] > arr[k + 1]) // 改成小于号即为从大到小排序
                    [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]]
            }
        }
    }
    console.log(arr)
    return arr;
}



var arr = [7, 8, 19, 10, 15]
bubbleSort(arr)
bubbleSort2(arr)