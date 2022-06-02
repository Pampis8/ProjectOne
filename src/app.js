import express from 'express';
import config from './config';
import cors from "cors";
import morgan from "morgan";
import usersRoutes from './routes/users.routes';
import productsRoutes from './routes/products.routes';
const app = express();

//settings
app.set('port', config.port);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", usersRoutes);
export default app;

