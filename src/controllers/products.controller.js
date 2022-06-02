import { getConnection, sql } from "../database/connection";
import { productsQuerys } from "../database/querys/products/productsQuerys";

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(productsQuerys.getAllProduct);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const createNewProduct = async (req, res) => {

    const { id, Name } = req.body;
    let { Quantity } = req.body;


    if (id == null || Name == null) {
        return res.status(400).json({ msg: "Bad Request. Porfavor llena todos los campos" });
    }

    if (Quantity == null) Quantity = 0;

    try {

        const pool = await getConnection();

        await pool
            .request()
            .input("id", sql.Int, id)
            .input("Name", sql.VarChar, Name)
            .input("Quantity", sql.Int, Quantity)
            .query(queries.addNewProduct)

        res.json({ id, Name, Quantity })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductByID = async (req, res) => {
    const{id} = req.params;

    const pool = await getConnection()
    const result = await pool
    .request()
    .input("id", id)
    .query(queries.getProductsById);

    res.send(result.recordset[0]);
}


export const deleteProducByIdt = async (req, res) => {
    const{id} = req.params;

    const pool = await getConnection()
    const result = await pool
    .request()
    .input("id", id)
    .query(queries.deletPrdocut);

    res.sendStatus(204);
}

export const getTotalProducts = async (req, res) => {

    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries.getTotalProducts);

    res.json(result.recordset[0][""])
}

export const updateProductById = async (req, res) => {
    const { Name, Quantity } = req.body;
    const { id } = req.params;

    if ((Name == null, Quantity === null)) {
        return res.status(400).json({ msg: "Bad Request. Porfavor llena todos los campos" });
    }

    const pool = await getConnection();
    await pool
    .request()
    .input("Name", sql.VarChar, Name)
    .input("Quantity", sql.Int, Quantity)
    .input("id", sql.Int, id) 
    .query(queries.updateProductById);

    res.json({Name, Quantity})

}

// export const getProducts = (req, res) => res.send(jsonContent);

// const responseData = {
//     Message: "productos!!!",
//     Puto: "Javier"
// }

// const jsonContent = JSON.stringify(responseData); 