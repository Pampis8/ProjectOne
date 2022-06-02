export const usersQuerys = {
    getAllUsers: "SELECT * FROM users",
    createNewUser: "INSERT INTO users ( [USER], PASS ) VALUES (@USER, @PASS)",
    getUsersById: "SELECT * FROM users Where id = @id",
    deletUsers: "DELETE FROM [mydb].[dbo].[users] WHERE id = @id",
    updateUsersById: "UPDATE users SET Name = @Name, Quantity = @Quantity WHERE id = @id"
}