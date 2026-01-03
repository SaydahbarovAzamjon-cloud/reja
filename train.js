console.log('TRAIN  AREA!');


// MITASK-C 

// Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

//Yechim 
const moment = require("moment");
const time = moment().format("HH:mm:ss");
    class Shop{
            constructor(non, choy, shashlik) {
        this.non = non;
        this.choy = choy;
        this.shashlik = shashlik;
    }
    qoldiq() {
        const time = moment().format("HH:mm");
        console.log(`Hozir ${time}da ${this.non}ta non, ${this.shashlik}ta shashlik va ${this.choy}ta choy mavjud!`);
    }

    sotish(mahsulot, miqdor ) {
        const time = moment().format("HH:mm:ss");
        if (this[mahsulot] >= miqdor){
            this[mahsulot] -= miqdor;
            console.log(`${time}da ${miqdor}ta ${mahsulot} sotildi}`)
        } else {
            console.log(`${time}da yetarli ${mahsulot} yo'q!`)
        }
    }

    qabul(mahsulot, soni) {
    const time = moment().format("HH:mm");
    this[mahsulot] += soni;
    console.log(`${time}da ${soni}ta ${mahsulot} qabul qilindi`);
    }
}

const order = new Shop(4, 6, 7)
order.qoldiq();
order.sotish('shashlik', 5);
order.qoldiq()    























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
