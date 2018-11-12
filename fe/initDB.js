const init = require('../lib/init/sql');
const {
    dialect,
    database,
    host,
    port,
    username,
    password
} = require('../config/sequelize.config');
const Sequelize = require('sequelize');
const tools = require('./tools');

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    port
});

// const liwei_allTables = `
// select concat('drop table ',table_name,';') from information_schema.TABLES where table_schema='liwei'
// `;

// sequelize.query(liwei_allTables).then(res => {

//     let arr = tools.getStrFromArr(res);
//     console.log(arr)
// }).catch(err => {
//     console.log(err);
// })



