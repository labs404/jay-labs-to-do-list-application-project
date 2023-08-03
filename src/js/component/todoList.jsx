import React, { useState } from "react";

const TodoList = () => {
	const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    function addToTodoList() {
        if (newTodo != "") {
            let workingItem = {};
            workingItem.id = new Date().getTime();
            workingItem.taskString = newTodo;
            workingItem.completed = "no";
            todoList.push(workingItem);
            setTodoList(todoList);
            setNewTodo("");
            console.log(todoList);
        }
    };

    function removeFromTodoList(itemIdentifier) {
        let workingList = todoList.filter(item => item != itemIdentifier);
        console.log(workingList);
        // console.log(todoList.indexOf(itemIdentifier));
        // console.log(todoList);
        todoList.splice(todoList.indexOf(itemIdentifier),1);
        console.log(todoList);
        // setTodoList(workingList);
        // setTodoList(todoList.slice());
    }

    let mappedTasks = todoList.map(task => {
        return (
                <div key={task.id}>
                    [ {task.taskString} ] [ completed?: {task.completed} ] <button className="removeFromTodoButton" onClick={() => removeFromTodoList(task)}>delete button placeholder</button><br />
                </div>        
        )
    });

	return (
		<div className="todo-container">
			<div className="row">
				<div className="todo-h1">
					<h1>Jay's To-Do list</h1>
				</div>
				<div className="todo-input-field">
					<input 
						type="text" 
						className="controlled-input"
						onChange={(e) => setNewTodo(e.target.value)}
						value={newTodo}
					/>
					<button className="addToTodoButton" onClick={addToTodoList}>add this task</button>
				</div>
				<div className="todo-list-content">
                    {mappedTasks}
                    {todoList}
				</div>
				<div className="todo-task-counter">
					{todoList.length > 0 ? <p>Active tasks: {todoList.length}</p> : <p>You don't have any active tasks!</p>}
				</div>
			</div>
		</div>
	);
};

export default TodoList;