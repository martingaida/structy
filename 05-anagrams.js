/*
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams. 
Anagrams are strings that contain the same characters, but in any order.
*/

const anagrams = (s1, s2) => {
    let arr1 = s1.split('')
    let arr2 = s2.split('')

    if (arr1.length !== arr2.length) return false
        
    while (arr1.length) {
        let curr = arr1.pop()

        if (!arr2.includes(curr)) return false
        else arr2.splice(arr2.indexOf(curr), 1)
    }
    if (arr2.length) return false
    else return true
}

console.log(anagrams('monkeyswrite', 'newyorktimes'))