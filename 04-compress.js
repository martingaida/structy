/*
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
*/

const compress = (s) => {
    let arr = s.split('')
    let num = 1
    let res = []

    for (let i=0;i<arr.length;i++) {
        let curr = arr[i]

        if (arr[i+1] === curr) num++
        else if (num === 1) {
            res.push(curr)
        }
        else {
            res.push(num, curr)
            num = 1
        }
    }

    return res.join('')
}

console.log(compress('ccaaatsss'))