import React, { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);

	// console.log(input);
	console.log(todos);

	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const sec = date.getSeconds();
	const time = `${hours}:${minutes}:${sec}`;

	const addTodo = (e) => {
		e.preventDefault();

		setTodos((prevItems) => [
			...prevItems,
			{
				id: prevItems.length,
				todo: input,
				timeStamp: time,
				isComplete: false,
			},
		]);
		setInput('');
	};

	const handleRemove = (id) => {
		const newList = todos.filter((item) => item.id !== id);

		setTodos(newList);
	};

	const handleUpdate = (text, id) => {
		todos.map((todo) => {
			if (todo.id === id) {
				todo.todo = text;
			}
		});

		setTodos([...todos]);
	};

	const completeTodo = (id) => {
		todos.map((item) => {
			if (item.id === id) {
				item.isComplete = !item.isComplete;
			}
			return item;
		});

		setTodos([...todos]);
	};

	return (
		<div className='app'>
			<h1>Today's plan of Action</h1>

			<div className='app__input'>
				<form>
					<input
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Plan for the day'
					/>
					<button disabled={!input} onClick={addTodo}>
						add todo
					</button>
				</form>
			</div>

			<div className='app__body'>
				{todos.map((item) => (
					<TodoList
						index={item.id}
						text={item.todo}
						time={time}
						handleRemove={handleRemove}
						handleUpdate={handleUpdate}
						completeTodo={completeTodo}
						isComplete={item.isComplete}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
