function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array, head, tail) {
    let pivot = array[tail];
    let i = head - 1;
    for (let j = head; j < tail; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, tail);
    return i + 1;
}

function quickSort(array, head, tail) {
    if (head < tail) {
        let pivotIndex = partition(array, head, tail);
        quickSort(array, head, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, tail);
    }
}

function showResult() {
    let arr = [3, 1, 8, 6, 9, 2, 7];
    quickSort(arr, 0, arr.length - 1);
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + " ";
    }
    document.getElementById("demo").innerHTML = result;
}
