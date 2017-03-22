var xlsx = require('./xlsx');

var headerMap = {
    index: '序号',
    networkNo: '网点编号',
    deviceModelName: '机型名称',
    goodsName: '商品名称',
    salesPeriodType: '销售时段',
    coverAmount: '补货量',
    exportDate: '导出时间'
};
var __data = [
    {
        index: '1',
        networkNo: '饭团机',
        deviceModelName: '30',
        goodsName: 'China',
        salesPeriodType: 'hello',
        coverAmount: 'hello',
        exportDate: 'hello',
    },
    {
        index: '2',
        networkNo: '饭团机',
        deviceModelName: '30',
        goodsName: 'China',
        salesPeriodType: 'hello',
        coverAmount: 'hello',
        exportDate: 'hello',
    },
];

var a = new xlsx.Xlsx(headerMap, __data, './out');
a.outputXlsx();