//1. O(n)
let addToZero = arr => {

    
    let value = false


    for (let i = 0; i < arr.length; i++ ) {
        for (let j = 0; j < arr.length; j++) {
                if (i !== j) {
                    if (arr[i] + arr[j] == 0) {
                        return value = true
                }
                } 
        } 
    }
}


console.log(addToZero([1, 2, 3, -2]))


// 2. O(1)

let hasUniqueChars = (word) => {

    for(let i = 0; i < word.length; i++) {
        for(let j = i + 1; j < word.length; j++) {
        if (word[i] == word[j]) {
            return false       
          }
        }
    }
    return true
    }

    console.log(hasUniqueChars("Gino"))


//3. O(1)
let isPangram = arr => {

    let str = arr.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//4. O(n)

let findlongestWord = arr => {

    let length = []

    let arrRes = arr.forEach(ar => {
        length.push(ar.length)
    })

    return Math.max(...length)
}

console.log(findlongestWord(["hi", "hello"]))