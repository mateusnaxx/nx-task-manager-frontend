import { useState } from "react";

import CustomInput from "./CustomInput";
import "./AddTask.scss";

const AddTask = () => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <div className="add-task-container">
            <div>
                <CustomInput
                    label="Adicionar tarefa..."
                    value={task}
                    onChange={onChange}
                />
            </div>
            {/* <div className="custom-button-container">
                <CustomButton text="Adicionar" />
            </div> */}
        </div>
    );
};

export default AddTask;
