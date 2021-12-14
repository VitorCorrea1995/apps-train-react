import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, allTodos, setAllTodos}) => {
    const deleteHandler = (todoId) => {
        return () => {
            setTodos(todos.filter(todo => todo.id !== todoId));
            setAllTodos(allTodos.filter(todo => todo.id !== todoId));
        }
    }

    const completeStatusChangedHandler = (id) => {
        const todo = allTodos.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        setAllTodos(allTodos);
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} id={todo.id} completed={todo.completed} deleteHandler={deleteHandler(todo.id)}
                    completeStatusChangedHandler={completeStatusChangedHandler}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;