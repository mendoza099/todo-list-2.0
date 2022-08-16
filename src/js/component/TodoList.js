import React, { useState } from "react";

export const TodoList = () => {
	const [input, setInput] = useState("");
	const [items, setItems] = useState([]);

	const inputTask = e => {
		setInput(e.target.value);
	};

	const addItem = event => {
		//evitar procesamiento automático de datos
		event.preventDefault();
		setItems([
			...items,
			{
				id: items.length + 1,
				text: input
			}
		]);
		resetInputFields();
	};

	const resetInputFields = () => {
		setInput("");
	};

	const deleteItem = inputId => {
		const updatedItems = items.filter(input => input.id !== inputId);
		setItems(updatedItems);
	};

	const textInput = () => {
		var textoInput = "";
		if (items.length === 0) {
			textoInput = "Añade tu primera tarea";
		} else {
			textoInput = "Añade más tareas...";
		}
		return textoInput;
	};

	var itemsLeft = items.length;

	return (
		<div className="container">
			<div className="tittle text-center">
				<h1>todos</h1>
				<div className="cardList">
					<form type="submit" onSubmit={addItem}>
						<input
							className="inputText"
							placeholder={textInput()}
							type="text"
							onChange={inputTask}
							value={input}
						/>
					</form>
					<ul className="list-group list-group-flush">
						{items.map(input => {
							return (
								<li className="list-group-item" key={input.id}>
									{input.text}
									<button
										type="button"
										className="close"
										onClick={() => deleteItem(input.id)}>
										&times;
									</button>
								</li>
							);
						})}
						<div id="itemsLeft" className="text-left">
							{itemsLeft} items left
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};