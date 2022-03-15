export const getProducts = (req, res) => res.send(jsonContent);

const responseData = {
    Message: "productos!!!",
    Puto: "Juan"
}

const jsonContent = JSON.stringify(responseData);