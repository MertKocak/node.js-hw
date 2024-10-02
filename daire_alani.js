const pi = 3.14;

// Konsoldan yarıçapı alma
let yaricap = Number(process.argv.slice(2));

function alanHesaplama(yaricap) {
    let alan = pi * yaricap;
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);
}

alanHesaplama(yaricap);