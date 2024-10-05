
const daireAlanHesaplama = (yaricap) => {
    let alan = yaricap * yaricap * 3.14;
    return console.log("yaricapi " + yaricap + " olan dairenin alanı: " + alan);
}

const daireCevreHesaplama = (yaricap) => {
    let cevre = 2 * yaricap * 3.14;
    return console.log("yaricapi " + yaricap + " olan dairenin cevresi: " + cevre);
}

module.exports = {
    daireAlanHesaplama,
    daireCevreHesaplama
}
