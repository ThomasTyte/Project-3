import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Features/Navbar';
import TodoList from './Features/Todolist';
import TodoForm from './Features/Todoform';
import ContactForm from './Features/ContactForm';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false, id: Date.now() }]);
    };

    const completeTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id
            ? { ...todo, completed: !todo.completed } 
            : todo
        ));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/todos" element={
                        <div>
                            <TodoForm addTodo={addTodo} />
                            <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
                        </div>
                    } />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;