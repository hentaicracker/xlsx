const excel = require('node-excel-export');

const styles = {
    header: {
        font: {
            sz: '24',
            color: {
                rgb: 'FF000000'
            }
        },
        alignment: {
            vertical: 'center',
            horizontal: 'center'
        }
    },
    vice_header: {
        alignment: {
            vertical: 'center',
            horizontal: 'bottom',
            readingOrder: 2
        }
    },
    cell_general: {
        alignment: {
            vertical: 'center',
            horizontal: 'center'
        }
    },
    cell_general_red: {
        font: {
            sz: '11',
            color: {
                rgb: 'FFF44336'
            }
        },
        alignment: {
            vertical: 'center',
            horizontal: 'center'
        }
    }
}

class ExcelBuffer {

    constructor(source, name, merges) {
        this.name = name;
        this.heading = this.parseHeading(source.heading);
        this.merges = merges;
        this.specification = this.parseSpecification(source.headerMap);
        this.dataset = source.dataset;
        return this.exportBuffer();
    }

    parseHeading(arr) {
        let array = [];
        let stylesArr = ['header', 'vice_header', 'cell_general'];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                array[i] = arr[i].map((item, idx) => Object.assign({}, {
                    value: item,
                    style: styles[stylesArr[i]]
                }));
            }
        }
        return array;
    }

    parseSpecification(map) {
        for (let key in map) {
            map[key] = {
                displayName: map[key].key,
                headerStyle: styles.cell_general,
                cellStyle: (value, row) => row.isTotal ? styles.cell_general_red : styles.cell_general,
                width: map[key].width
            }
        }
        return map;
    }

    exportBuffer() {
        return excel.buildExport([
            {
                name: this.name,
                heading: this.heading,
                merges: this.merges,
                specification: this.specification,
                data: this.dataset
            }
        ]);
    }

}

exports.ExcelBuffer = ExcelBuffer;
