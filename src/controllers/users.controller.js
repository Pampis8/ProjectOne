import { getConnection, queries, sql, userQueries } from "../database/";
import { usersQuerys } from "../database/querys/users/usersQuerys";

export const getAllUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(usersQuerys.getAllUsers);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};