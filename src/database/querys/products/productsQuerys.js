export const productsQuerys = {
    getAllProduct: "SELECT * FROM products",
    addNewProduct: "INSERT INTO products (id, Name, Quantity ) VALUES (@id, @Name, @Quantity)",
    getProductsById: "SELECT * FROM products Where id = @id",
    deletPrdocut: "DELETE FROM [webstore].[dbo].[products] WHERE id = @id",
    getTotalProducts: "SELECT COUNT(*) FROM products",
    updateProductById: "UPDATE products SET Name = @Name, Quantity = @Quantity WHERE id = @id"
};