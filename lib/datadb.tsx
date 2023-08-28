import mysql from "mysql2/promise";

export async function query({query, values = []}:any) {
    const dbconnection = await mysql.createConnection({
        host: process.env.MYSQL_DATA_HOST,
        database: process.env.MYSQL_DATA_DATABASE,
        user: process.env.MYSQL_DATA_USER,
        password: process.env.MYSQL_DATA_PASSWORD,
    });

    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    } catch (error:any) {
        throw Error(error.message);
    }
}