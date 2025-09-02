import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({fetchTasks}) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAdd = async () => {
        try {
            if (task.length === 0) {
                return alert(
                    "A tarefa precisa de uma descrição para ser adicionada."
                );
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                is_completed: false,
            });

            await fetchTasks();

            setTask("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAdd}>
                <FaPlus size={14} color="#fff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
