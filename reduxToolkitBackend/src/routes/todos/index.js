import todosController from "../../controllers/todos/index.js";
import { Router } from "express";

const todosRouter = Router();

todosRouter.get('/todos', todosController.getAll);
todosRouter.get("/todo/:id", todosController.getSingle);
todosRouter.put("/todo/:id", todosController.update);
todosRouter.delete("/todo/:id", todosController.delete)
todosRouter.post('/todo', todosController.create);


export default todosRouter;
