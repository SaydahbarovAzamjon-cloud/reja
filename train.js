console.log('TRAIN  AREA!')

// TASK A

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi


function count (letter, word) {
    return word.split("").filter(ele => ele === letter).length;
}
console.log(count("a", "Assalomu Alaykum"));

function train (letter, word) {
    return word.split("").filter(ele => ele === letter).length;
}

console.log(train("s", "Bismillah"));
