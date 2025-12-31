console.log('TRAIN  AREA!')
// TASK B: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
function string (str, num) {
    let count = 0;
    for(let symbl of str) {
        if(symbl === String(num)) {
            count++;
        }
    }
    return count;
}

console.log(string("ad2a54y79wet0sfgb9", "5"));





// function string(str) {
//     let count = 0;

//     for (let symbl of str) {
//     if (symbl >= '0' && symbl <= '9') {
//         count++;
//     }
// }

//         return count;
// }

// console.log(string("ad2a54y79wet0sfgb9")); // 7











// TASK A

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi


// function count (letter, word) {
//     return word.split("").filter(ele => ele === letter).length;
// }
// console.log(count("a", "Assalomu Alaykum"));

// function train (letter, word) {
//     return word.split("").filter(ele => ele === letter).length;
// }

// console.log(train("s", "Bismillah"));
