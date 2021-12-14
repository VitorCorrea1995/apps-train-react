import React, {useState} from 'react';

const Todo = ({id, completed, text, deleteHandler, completeStatusChangedHandler}) => {
    const [isCompleted, setIsCompleted] = useState(completed);

    const toggleCompleteHandler = () => {
        setIsCompleted(!isCompleted);
        completeStatusChangedHandler(id);
    }

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className={isCompleted ? 'uncomplete-btn' : 'complete-btn'} onClick={toggleCompleteHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fa fa-trash"></i></button>
        </div>
    );
}

export default Todo;