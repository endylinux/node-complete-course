const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'dfadlafdafEEAEadfad!ad844', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;


// const mysql = require('mysql2');
//
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node_complete',
//     password: 'dfadlafdafEEAEadfad!ad844'
// });
//
// module.exports = pool.promise();
