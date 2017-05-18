// const isArray = (arr) => Array.isArray(arr);
// function jsons() {
//     // var aa = document.createElement('a');
//     // aa.href = config.api + "order/sales-export-xlxs";
//     // document.body.appendChild(aa);
//     // aa.click();
//     let s = '2017-05-04';
//     let e = '2017-05-01';
//     let start = new Date(s).getTime();
//     let end = new Date(e).getTime();
//     let a = start - end;
//     let days = Math.floor(a / (24 * 3600 * 1000)) + 1;
//     let size = ((days + 1) * 3) + 3;
//     let json = [{
//         goodsName: '红烧肉',
//         goodsId: 'b221f42f87934f53a27382c8f9149d0d',
//         supplierName: 'Test',
//         networkName: '网点a',
//         lossAmount: '10',
//         purchaseAmount: '10',
//         salesTotalAmount: '0',
//         shelfTotalAmount: '100',
//         supplierId: '553c4a09c46b45acaa575fddfc58d9b3',
//         time: '2017-05-03'
//     }, {
//         goodsName: '红烧肉',
//         goodsId: 'b221f42f87934f53a27382c8f9149d0d',
//         supplierName: 'Test',
//         networkName: '网点b',
//         lossAmount: '10',
//         purchaseAmount: '10',
//         salesTotalAmount: '0',
//         shelfTotalAmount: '100',
//         supplierId: '553c4a09c46b45acaa575fddfc58d9b3',
//         time: '2017-05-02'
//     }, {
//         goodsName: '毛豆',
//         goodsId: 'b221f42f87934f53a27382c8f9149d0d',
//         supplierName: 'Test',
//         networkName: '网点b',
//         lossAmount: '10',
//         purchaseAmount: '10',
//         salesTotalAmount: '0',
//         shelfTotalAmount: '100',
//         supplierId: '553c4a09c46b45acaa575fddfc58d9b3',
//         time: '2017-05-01'
//     }, {
//         goodsName: '毛豆',
//         goodsId: 'b221f42f87934f53a27382c8f9149d0d',
//         supplierName: '小欢专卖',
//         networkName: '网点c',
//         lossAmount: '10',
//         purchaseAmount: '10',
//         salesTotalAmount: '0',
//         shelfTotalAmount: '100',
//         supplierId: '179ae64375f4443496dedbf23a9db51c',
//         time: '2017-05-01'
//     }];
//     for (let x of json) {

//     }
//     let dateDay = 0;
//     let data = [];
//     let a1, a2, a3, a4, a5, a6, a7 = [];
//     a1 = [zb('商品销量明细', 0, 0, size, 1)];
//     a2 = [zb('营业日期', 0, 2, size, 2)];

//     for (let i = 0; i < days; i++) {
//         if (i == 6) {
//             let o = zb('商品名称', 0, 3, 0, 4);
//         }
//     }
//     a3 = [];
//     //a3.length = size;
//     a3[0] = zb('商品名称', 0, 3, 0, 4);
//     a3[1] = zb('供应商', 1, 3, 1, 4);
//     a3[2] = zb('网点名称', 2, 3, 2, 4);
//     a3[3] = zb('合计', 3, 3, 6, 3);
//     data.push(a1);
//     data.push(a2);
//     data.push(a3);
//     return data;
// }

// function zb(keys, sc, sr, ec, er) { //c 列 //r 行
//     return { [keys]: { s: { c: sc, r: sr }, e: { c: ec, r: er } } };
// }

// let data = jsons();

// const data = [
//     ['商品销量', null, null],
//     [{ '商品名称': { s: { c: 0, r: 3 }, e: { c: 0, r: 4 } } }, { '商品名称': { s: { c: 0, r: 3 }, e: { c: 0, r: 4 } } }, '供应商', '网点名称', '合计', null, '11/1/2016', '11/1/2016', '11/1/2016'],
//     [null, null, null, '采购数量', '供应商', '网点名称', '采购数量', '销售数量', '损耗数量', '备注']
// ];

// var merges = [];

// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         let item = data[i][j];
//         if (typeof item !== 'string' && item !== null) {
//             let keys = Object.keys(item);
//             if (keys.length === 1) {
//                 merges.push(item[keys[0]]);
//                 data[i][j] = keys[0];
//             }
//         }
//     }
// }

// console.log(data);
// console.log(merges);

var xlsx = require('./out3');

var a = new xlsx.XlsxBuffer(data, '__data');
a.exportBuffer();
