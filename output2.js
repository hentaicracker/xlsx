var xlsx = require('node-xlsx').default

// const data = [['商品销量'], [1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];

const isArray = (arr) => Array.isArray(arr);

const data = [
    ['商品销量'],
    [
        '商品名称', '供应商', '网点名称',
        [
            '合计',
            ['采购数量', '销售数量', '损耗数量']
        ],
        '备注'
    ],
    [
        '肉沫茄子', '德迎春',
        ['网点A', '网点B', '合计']
    ]
];

const transformData = [
    ['商品销量', null, null, null, null, null, null],
    ['商品名称', '供应商', '网点名称', '合计', null, null, '备注'],
    [null, null, null, '采购数量', '销售数量', '损耗数量', null],
]

var merges = [];
var xMax = 1;
var yMax = 1;
for (let i = 0; i < data.length; i++) {
    let x = data[i].length;
    let y = 1;
    for (let j = 0; j < data[i].length; j++) {
        let item = data[i][j];
        if (isArray(item)) {
            y = item.length;
        }
    }
    xMax = x > xMax ? x : xMax;
    yMax = y > yMax ? y : yMax;
}





xlsx.build([{ name: "mySheetName", data: transformData }], {
    '!merges': [
        { s: { c: 0, r: 0 }, e: { c: 6, r: 0 } },
        { s: { c: 0, r: 1 }, e: { c: 0, r: 2 } },
        { s: { c: 1, r: 1 }, e: { c: 1, r: 2 } },
        { s: { c: 2, r: 1 }, e: { c: 2, r: 2 } },
        { s: { c: 3, r: 1 }, e: { c: 5, r: 1 } },
        { s: { c: 6, r: 1 }, e: { c: 6, r: 2 } },
    ]
});

