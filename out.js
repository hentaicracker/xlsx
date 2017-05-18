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



let yMax = data.length;
let xMax = 0;
for(let i = 0; i < data.length; i++) {
    xMax = data[i].length > xMax ? data[i].length : xMax;
    let y = 1;
    for(let j = 0; j < data[i].length; j++) {
        let item = data[i][j];
        if(isArray(item)) {
            y = item.length;
            yMax += y - 1;
            for(let k = 0; k < y; k++) {
                let i = item[k];
                if(isArray(i)) {
                    xMax += i.length - 1;
                }
            }
        }
    }
    data[i].y = y;
    console.log(data[i].y);
}

let tData = [];
for(let i = 0; i < data.length; i++) {
    let tChild = {};
    for(let j = 0; j < data[i].length; j++) {
        tChild[j] = [];
        let item = data[i][j];
        if(isArray(item)) {
            y = item.length;
            for(let k = 0; k < y; k++) {
                let i = item[k];
                if(isArray(i)) {
                    tChild[j+k] = [];
                    let kx = i.length;
                    for(let o = 0; o < kx; o++) {
                        tChild[j+k][k + o] = i[o];
                        tChild[j][k + o + 1] = null;
                    }
                } else {
                    tChild[j].push(i);
                }
            }
        } else {
            tChild[j].push(item);
        }
    }
    for(let key in tChild) {
        tData.push(tChild[key]);
    }
}

