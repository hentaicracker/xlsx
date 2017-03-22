var XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
var sheetNames = workbook.SheetNames;
var workSheet = workbook.Sheets[sheetNames[0]];

for(var z in workSheet) {
    if(z[0] === '!') continue;
    console.log(z + '=' + JSON.stringify(workSheet[z].v));
}