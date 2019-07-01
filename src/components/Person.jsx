import React from 'react';
import '../styles/Person.css';

const Person = ({ photo, name, quote, superlative, deleteStudent, id, category }) => {
	return (
		<div className="card">
			<img src={photo} alt="stockphoto" className="photo" />
			<h1 className="name">{name}</h1>
			<p className="quote">"{quote}"</p>
			<p className="superlative">{superlative}</p>
			<button className="deleteBtn" onClick={() => deleteStudent(id, category)}>
				🗑
			</button>
		</div>
	);
};

export default Person;
