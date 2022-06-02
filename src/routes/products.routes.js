import { Router } from "express";

import {createNewProduct, deleteProducByIdt, getProductByID, getProducts, getTotalProducts, updateProductById} from '../controllers/products.controller'

const productsRouter = Router();

productsRouter.get("/products", getProducts);

productsRouter.post("/products", createNewProduct );

productsRouter.get("/products/count", getTotalProducts );

productsRouter.get('/products/:id', getProductByID );

productsRouter.delete('/products/:id', deleteProducByIdt );

productsRouter.put('/products/:id', updateProductById );

export default productsRouter;