import React, { useState } from "react";
import TodoList from "./todoList";
import TodoListTwo from "./todoList2";


const Home = () => {
	return (
		<div className="todo-container">
			<TodoListTwo />
		</div>
	);
};

export default Home;
