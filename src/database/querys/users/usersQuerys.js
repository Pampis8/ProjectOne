export const usersQuerys = {
    getAllUsers: "SELECT * FROM users",
    addNewUsers: "INSERT INTO users (id, Name, Quantity ) VALUES (@id, @Name, @Quantity)",
    getUsersById: "SELECT * FROM users Where id = @id",
    deletUsers: "DELETE FROM [mydb].[dbo].[users] WHERE id = @id",
    updateUsersById: "UPDATE users SET Name = @Name, Quantity = @Quantity WHERE id = @id"
}