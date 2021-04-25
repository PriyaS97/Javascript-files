'use strict';

// house

this.table = 'window table';

// const cleanTable = function (soap) {

//     const innerFuction = (_soap) => {
//         console.log(`cleaning ${this.table} using ${_soap}`);
//     };
//     innerFuction(soap);
// };


// console.log(window.table);

this.garage = {
    table: 'garage table'

};
// this.garage.cleanTable();

// console.log(this.garage.table);

// let johnsRoom = {
//     table: 'Johns table'

// };

class createRoom {
    constructor(name){
        this.table =`${name}s table`
    }
    cleanTable(soap){
        console.log(`claening ${this.table} using ${soap}`);
    }
}

// createRoom.prototype.cleanTable = function(soap) {
//    // debugger;
//     console.log(`cleaning ${this.table}using ${soap}`);
// }

const jillsRoom =  new createRoom('jill');
const johnsRoom = new createRoom('john');

// console.log(johnsRoom.table);
// johnsRoom.cleanTable();

// cleanTable.call(this, 'some soap');
// cleanTable.call(this.garage, 'some soap');
// cleanTable.call(johnsRoom, 'some soap');
// cleanTable.call(jillsRoom, 'some soap');

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap');