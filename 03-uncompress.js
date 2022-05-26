/*
Write a function, uncompress, that takes in a string as an argument. 
The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' 
of a group is repeated 'number' times consecutively. You may assume that the input string 
is well-formed according to the previously mentioned pattern.
*/

const uncompress = (s) => {
    let arr = s.split('')
    let digits = '0123456789'
    let num = []
    let res = []
    
    for (let i=0;i<arr.length;i++) {
        let curr = arr[i]

        if (digits.includes(curr)) num.push(curr)
        else {
            let len = parseInt(num.join(''))
            
            for (let j=1;j<=len;j++) {
                res.push(curr)
            }
            num=[]
        }
    }

    return res.join('')
}

console.log(uncompress('2c3a1t'))