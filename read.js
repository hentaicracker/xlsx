var XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx', {
    cellStyles: true,
    cellDates: true
});
var sheetNames = workbook.SheetNames;
var workSheet = workbook.Sheets[sheetNames[0]];
var data = XLSX.utils.sheet_to_json(workSheet);

// var headerMap = {
//     terminalName: '终端花名（必填）',
//     deviceModelName: '机型名称（必填）',
//     productionDate: '出厂日期（必填）',
//     isMasterTerminal: '是否为主柜（必填）',
//     masterTerminalName: '主柜终端花名'
// };

// let arr = data.map(i => Object.assign({}, {
//     terminalName: i[headerMap['terminalName']],
//     deviceModelName: i[headerMap['deviceModelName']],
//     productionDate: i[headerMap['productionDate']],
//     isMasterTerminal: i[headerMap['isMasterTerminal']],
//     masterTerminalName: i[headerMap['masterTerminalName']] || null,
// }));

console.log(sheetNames);
console.log(workSheet);

// XLSX.writeFile(workbook, 'write.xlsx');
