export const getProducts = (req, res) => res.send(jsonContent);

const responseData = {
    Message: "productos!!!",
    Puto: "Javier"
}

const jsonContent = JSON.stringify(responseData);