import { getConnection, sql } from "../database/";
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

export const createNewUser = async (req, res) =>{

    const { USER, PASS  } = req.body;

    if (USER == null || PASS == null) {
        return res.status(400).json({ msg: "Bad Request. Porfavor llena todos los campos" });
    }
    try {

        const pool = await getConnection();

        await pool
            .request()      
            .input("USER", sql.Text, USER)
            .input("PASS", sql.VarChar, PASS)
            .query(usersQuerys.createNewUser)

        res.json({ USER, PASS })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}