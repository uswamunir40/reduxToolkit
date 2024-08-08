
import todosModel from "../../modals/todos/index.js"


const todosController = {

    getAll: async (req, res) => {
        try {
            const todos = await todosModel.findAll({


            });
            res.status(200).json({

                data: todos
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });

        }


    },

    getSingle: async (req, res) => {
        try {
            const { id } = req.params;

            const todo = await todosModel.findByPk(id);
            if (!todo) {
                return res.status(404).json({ message: "No todo with this name" });
            }
            res.status(200).json({ data: todo });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const payload = req.body;
            console.log("Payload is ", payload);
            const todo = await todosModel.findByPk(id);
            if (!todo) {
                return res.status(404).json({ message: "No todo with this ID" });
            }
            if (payload.text) {
                todo.text = payload.text;
            }
            await todo.save();


            res.status(200).json({ message: "Todo updated successfully", todo });
        } catch (error) {

            res.status(500).json({ message: "Internal server error" });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const todo = await todosModel.findByPk(id);
            if (!todo) {
                return res.status(404).json({ message: "No todo with this ID" });
            }
            await todo.destroy();

            res.status(200).json({ message: "Todo deleted successfully", todo });
        } catch (error) {

            res.status(500).json({ message: "Internal server error" });
        }
    },

    create: async (req, res) => {
        try {
            const payload = req.body;
            console.log("Payload is ", payload);

            const todo = new todosModel();
            todo.text = payload.text;
            await todo.save();

            res.status(200).json({ message: "Todo created", todo });



        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });

        }
    }

}
export default todosController;