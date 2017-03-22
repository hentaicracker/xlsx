# xlsx

使用 [xlsx.js](https://github.com/SheetJS/js-xlsx) 模块导出 xlsx文件

## 用法

安装 xlsx 模块
```shell
$ yarn add xlsx
```

例子：
```javascript
var xlsx = require('./xlsx');

var headerMap = {
    index: '序号',
    name: '姓名',
    age: '年龄'
};
var data = [
    {
        index: '1',
        name: '小明',
        age: '22'
    },
    {
        index: '1',
        name: '小生',
        age: '23'
    }
];

var a = new xlsx.Xlsx(headerMap, __data, './out');
a.outputXlsx();
```