"use strict";

var xlsx = require('node-xlsx').default;

class XlsxBuffer {

    constructor(source, name) {
        this.merges = [];
        this.data = [];
        this.name = name;
        this.parse(source);
    }

    parse(data) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                let item = data[i][j];
                if (typeof item !== 'string' && item !== null) {
                    let keys = Object.keys(item);
                    if (keys.length === 1) {
                        this.merges.push(item[keys[0]]);
                        data[i][j] = keys[0];
                    }
                }
            }
        }
        this.data = data;
    }

    exportBuffer() {
        console.log(this.data);
        console.log(this.merges);
        return xlsx.build([{name: this.name, data: this.data}], {
            '!merges': this.merges
        });
    }

}

exports.XlsxBuffer = XlsxBuffer;
