/*
Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.
*/

const maxValue = (arr) => {
    let max = arr[0]

    for (let i=1;i<arr.length;i++) {
        let curr = arr[i]
        if (curr>max) max=curr
    }
    return max
};

console.log(100 === maxValue([0,1,10,4,5,100,11,9]))
console.log(-1 === maxValue([-99,-10,-10,-4,-5,-100,-1,-9]))