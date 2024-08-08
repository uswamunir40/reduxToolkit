import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const todosModel = sequelize.define("Todos", {
  // Model attributes are defined here
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default todosModel;
