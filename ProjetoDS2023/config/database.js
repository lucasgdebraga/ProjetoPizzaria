const mysql2 = require("mysql2/promise");
const config = require("config");

dbConnection = {
    async executeSQLQuery(sql, params){
        const connection = await mysql2.createConnection({
            host: config.get("db.host"),
            database: config.get("db.database"),
            user: config.get("db.user"),
            password: config.get("db.password")
        });
        const [rows, fields] = await connection.execute(sql, params);
        connection.end();
        return {rows, fields};
    }
};

module.exports = dbConnection;