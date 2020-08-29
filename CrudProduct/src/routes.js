import { Router } from "express";
import ProductsController from "./app/controllers/ProductsController";

const routes = new Router();

routes.post("/products", ProductsController.store);
routes.get("/products", ProductsController.index);
routes.get("/products/:id", ProductsController.indexById);
routes.put("/products/:id", ProductsController.update);
routes.delete("/products/:id", ProductsController.delete);

export default routes;
