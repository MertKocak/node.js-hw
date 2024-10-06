const fs = require('node:fs');

fs.writeFile('employees.json', `{"name": "Employee 1 Name", "salary": 2000}`, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("dosya oluşturuldu.");
    }
});

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

fs.appendFile('employees.json', '\n,{"name": "Employee 2 Name", "salary": 4000}', function (err) {
    if (err) throw err;
    console.log('dosya güncellendi');
});

fs.unlink('employees.json', function (err) {
    if (err) throw err;
    console.log('dosya silindi');
  });