
function method1(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        var a = parseInt(Math.random() * len);

        var temp = arr[a];
        arr[a] = arr[i];
        arr[i] = temp;
    }

    return arr;
}
let arr = ['1', '2', '3', '4', '5', '6', '7', '8'];
let arr1 = arr.splice(1, 1);
console.log(arr);

