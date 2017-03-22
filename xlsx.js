"use strict";

var XLSX = require('xlsx');

class Xlsx {
    constructor(map, source, path) {
        this.map = map;
        this.source = source;
        this.path = path;
        this._headers = this.getHeaders(this.map);
        this._data = this.parseHeader(this.map, this.source);
    }
    getHeaders(map) {
        let arr = [];
        for (let key in map) {
            arr.push(map[key]);
        }
        return arr;
    }
    parseHeader(obj, data) {
        return data
            .map((v, i) => {
            let nObj = {};
            for (let key in v) {
                nObj[obj[key]] = v[key];
            }
            return nObj;
        });
    }

    /**
     * 得到符合 xlsx 格式的 header 数据
     */
    writeHeader(headers) {  
        return headers
            .map((v, i) => Object.assign({}, { v: v, position: String.fromCharCode(65 + i) + 1 }))
            .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.v } }), {});
    }

    /**
     * 得到符合 xlsx 格式的 content 数据
     */
    writeContent(content) {
        return content
            .map((v, i) => this._headers.map((k, j) => Object.assign({}, { v: v[k], position: String.fromCharCode(65 + j) + (i + 2) })))
            .reduce((prev, next) => prev.concat(next))
            .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.v } }), {});
    }

    /**
     * 导出xlsx
     */
    outputXlsx() {
        let headers = this.writeHeader(this._headers);
        let data = this.writeContent(this._data);
        let output = Object.assign({}, headers, data);
        let outputPos = Object.keys(output);
        let ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];
        let workbook = {
            SheetNames: ['sheet1'],
            Sheets: {
                'sheet1': Object.assign({}, output, { '!ref': ref })
            }
        };
        return XLSX.writeFile(workbook, `${this.path}.xlsx`);
    }
}

exports.Xlsx = Xlsx;
