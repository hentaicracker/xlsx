var XLSX = require('xlsx');

var workbook = {
    SheetNames: ['sheet1'],
    Sheets: {
        'sheet1': {
            '!ref': 'A1:D4',
            A1: { v: '商品销量明细' , s: {
                'color': 'red'
            }},
            A3: { v: '营业日期：2016.11.1－2016.11.3' },
            A4: { v: '商品名称' },
            B4: { v: '供应商' },
            C4: { v: '网点名称' },
            D4: { v: '合计' },
        }
    }
};

XLSX.writeFile(workbook, 'output1.xlsx');