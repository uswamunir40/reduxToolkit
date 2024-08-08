import todosModel from "../modals/todos/index.js";
import sequelize from "./config.js";
const syncDb = async () => {
    await sequelize.sync({ alter: true, force: false });
    await todosModel.sync({ alter: true, force: false });


    console.log("Models created");
}

export default syncDb;