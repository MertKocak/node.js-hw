// yöntem 1
const daireAlanHesaplama = require("./circle");
const daireCevreHesaplama = require("./circle");

daireAlanHesaplama.daireAlanHesaplama(5);
daireCevreHesaplama.daireCevreHesaplama(7);

//yöntem 2
const {daireAlanHesaplama, daireCevreHesaplama} = require("./circle");

daireAlanHesaplama(5);
daireCevreHesaplama(7);
