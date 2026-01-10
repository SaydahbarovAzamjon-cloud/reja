console.log('TRAIN  AREA!');
// TASK F:

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!
                                                        

function findDoubler(finder) {
for (let i = 0; i < finder.length - 1; i++) {
    if (finder[i] === finder[i + 1]) {
        return true;
    }
}
        return false;
}

console.log(findDoubler("hello")); 
















// TASK E: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

                                // YECHIM
// const task = ['MIT38'];
// const solve = task.map((ele) => {
//     return ele.split("").reverse().join("");
// });
// console.log(solve)

// TASK D : 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin

// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function task(a, b) {
//     if (a.length !== b.length) return false;

//     const aa = a.split('').sort().join('');
//     const bb = b.split('').sort().join('');

//     return aa === bb;
// }



// const check = task("mit38", "38mit");    
// console.log(check)      // true

// MITASK-C 

// Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

//Yechim 
// const moment = require("moment");
// const time = moment().format("HH:mm:ss");
//     class Shop{
//             constructor(non, choy, shashlik) {
//         this.non = non;
//         this.choy = choy;
//         this.shashlik = shashlik;
//     }
//     qoldiq() {
//         const time = moment().format("HH:mm");
//         console.log(`Hozir ${time}da ${this.non}ta non, ${this.shashlik}ta shashlik va ${this.choy}ta choy mavjud!`);
//     }

//     sotish(mahsulot, miqdor ) {
//         const time = moment().format("HH:mm:ss");
//         if (this[mahsulot] >= miqdor){
//             this[mahsulot] -= miqdor;
//             console.log(`${time}da ${miqdor}ta ${mahsulot} sotildi}`)
//         } else {
//             console.log(`${time}da yetarli ${mahsulot} yo'q!`)
//         }
//     }

//     qabul(mahsulot, miqdor) {
//     const time = moment().format("HH:mm");
//     this[mahsulot] += miqdor;
//     console.log(`${time}da ${soni}ta ${mahsulot} qabul qilindi`);
//     }
// }

// const order = new Shop(4, 6, 7)
// order.qoldiq();
// order.sotish('shashlik', 5);
// order.qoldiq()    


// TASK B: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function string (str, num) {
//     let count = 0;
//     for(let value of str) {
//         if(value === String(num)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(string("ad2a54y79wet0sfgb9", "5"));


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
