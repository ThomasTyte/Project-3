import React from 'react';

const Todo = ({ todo, completeTodo, removeTodo }) => {
    return (
        <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span>{todo.text}</span>
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
    );
};

export default Todo;