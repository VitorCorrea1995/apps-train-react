import React, {useState} from 'react'

const Form = ({inputText, setInputText, todos, setTodos, allTodos, setAllTodos}) => {
    const FILTER_VALUES  = {ALL: 'all', COMPLETED: 'completed', UNCOMPLETED: 'uncompleted'};

    const [filterOption, setFilterOption] = useState(FILTER_VALUES.ALL);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        const newAllTodos = [
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000}
        ];
        setTodos(newAllTodos);
        setAllTodos(newAllTodos);
        setInputText("");
    }
    
    const handlerFilter = (event) => {
        event.preventDefault();
        const selectedOption = event.target.value;
        setFilterOption(selectedOption);
        if (selectedOption === FILTER_VALUES.COMPLETED) {
            setTodos(allTodos.filter(todo => todo.completed));
        } else if (selectedOption === FILTER_VALUES.UNCOMPLETED) {
            setTodos(allTodos.filter(todo => !todo.completed));
        } else {
            setTodos(allTodos)
        }
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" value={filterOption} onChange={handlerFilter}>
                    <option value={FILTER_VALUES.ALL}>All</option>
                    <option value={FILTER_VALUES.COMPLETED}>Completed</option>
                    <option value={FILTER_VALUES.UNCOMPLETED}>Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;