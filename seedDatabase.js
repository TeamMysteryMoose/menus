let dummyData = require('./fakeMenus.js');
let dbHelper = require('./database/menudb.js');
let mongoose = require('mongoose');
//
//mongoose.connect('mongod://localhost/entries');
mongoose.connect('mongodb://127.0.0.1:27017/entries');
console.log(dummyData.length);
let seedDatabase = function (dummyData) {
    for(var i = 0; i < dummyData.length; i++) {
        dbHelper.saveIntoDB(dummyData[i]);
    }
}
seedDatabase(dummyData);
