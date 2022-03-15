import sql from 'mssql'

const dbSettings = {
    user : "sa",
    password: "Passw0rd",
    server: "localhost" ,
    database: "webstore",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
    console.error(error);
    }
}
    

getConnection();