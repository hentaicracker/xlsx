var excel = require('./excelBuffer');
var fs = require('fs');

var source = {
    heading: [['商品销量'], ['营业日期'], ['商品名称', '供应商', '合计', null, '啊达四方']],
    headerMap: {
        goodsName: {
            key: '商品名称',
            width: 110
        },
        supplierName: {
            key: '供应商',
        },
        caigaouHeji: {
            key: '采购',
        },
        caigou20161101: {
            key: '采购fdsg',
        },
        caigaouHe: {
            key: '采购',
        },
        caigou201611: {
            key: '采购fdsg',
        },
    },
    dataset: [
        { goodsName: 'adsf', supplierName: 'gggg', caigaouHeji: 'gggg', caigou20161101: 'gggg',caigaouHe: 'asdf', caigou201611: 'asdf', isTotal: true },
        { goodsName: 'adsf', supplierName: '23', caigaouHeji: '32', caigou20161101: '23',caigaouHe: 'asdf', caigou201611: 'asdf', isTotal: true },
        { goodsName: 'adsf', supplierName: '43', caigaouHeji: '43', caigou20161101: '43',caigaouHe: 'asdf', caigou201611: 'asdf', isTotal: true },
        { goodsName: 'adsf', supplierName: '43', caigaouHeji: '43', caigou20161101: '43',caigaouHe: 'asdf', caigou201611: 'asdf', isTotal: true },
    ]
};

var merges = [
     { start: { row: 3, column: 1 }, end: { row: 4, column: 1 } },
    { start: { row: 3, column: 2 }, end: { row: 4, column: 2 } },
    { start: { row: 3, column: 3 }, end: { row: 3, column: 4 } },
    { start: { row: 3, column: 5 }, end: { row: 3, column: 6 } },
    { start: { row: 1, column: 1 }, end: { row: 1, column: 6 } },
    { start: { row: 2, column: 1 }, end: { row: 2, column: 6 } },
]

let report = new excel.ExcelBuffer(source, 'test', merges);

fs.writeFile('./excel.xlsx', report, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});