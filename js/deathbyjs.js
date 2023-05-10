//STEP 1
// let  str = 'webmaster'

// console.log(`Example string: ${str}`)

// function alphaOrder(str) {
//     let alphaArray = str.split('')
//     alphaArray.sort()
//     let sortedArray = alphaArray.join('')
//     return sortedArray
// }

// console.log(`Output string: ${alphaOrder(str)}`)

//STEP 2
// const sentence = 'the quick brown fox jumped over the lazy dog'
// const intoWords = sentence.split(' ')



// function capEachWord() {
//     for (let i=0; i < intoWords.length; i++) {
//         intoWords[i] = intoWords[i][0].toUpperCase() + intoWords[i].substring(1)
//     }
//     console.log(intoWords.join(' '))
// }

// capEachWord(sentence)



//STEP 3

// let anyString = 'Two roads diverged in a yellow wood, and sorry I could not travel both and be one traveler, long  stood and looked down one as far as I could o where it bent in the undergrowth'



// function getCount(anyString) {
//     anyString.toLowerCase()
//     let vowelsNum = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let item of anyString) {
//         if (vowels.includes(item)) {
//             vowelsNum++
//         }
//     }
//     return vowelsNum
// }

// console.log(`The number of vowels in your string: ${getCount(anyString)}`)

//STEP 4
// const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

// function randomString() {
//     let randStr = ''
//     const lengthLetters = allLetters.length
//     for (let i = 0; i < 10; i++) {
//         randStr += allLetters.charAt(Math.floor(Math.random()*lengthLetters))
//     }
//     return randStr
// }

// console.log(randomString())

//STEP 5
// let countries = ['Germany', 'France', 'Japan', 'United States of America', 'Switzerland']

// function getLongestString (countries) {
//     return  countries.reduce(
//        function (str1, str2) {
//           return str1.length > str2.length ? str1 : str2;
//       }
//      )

    
//   }

//   console.log(`The country with the longest name is: ${getLongestString(countries)}.`)