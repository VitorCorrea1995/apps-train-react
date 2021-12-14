import React, {useState} from 'react';
import './App.css';

import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
    const [inputText, setInputText] = useState(""); 
    const [todos, setTodos] = useState([]);
    const [allTodos, setAllTodos] = useState(todos);

    return (
        <div>
            <header>
                <h1>Vitor Todo List</h1>
            </header>
            <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} allTodos={allTodos} setAllTodos={setAllTodos}/>
            <TodoList todos={todos} setTodos={setTodos} setAllTodos={setAllTodos} allTodos={allTodos}/>
        </div>
    );
}

export default App;
