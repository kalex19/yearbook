import React from 'react';
import '../styles/Person.css';

const Person = ({ photo, name, quote, superlative, deleteStudent, id }) => {
	return (
		<div>
			<img src={photo} alt="image" className="photo" />
			<h1 className="name">{name}</h1>
			<p className="quote">"{quote}"</p>
			<p className="superlative">{superlative}</p>
			<button className="deleteBtn" onClick={() => deleteStudent(id)}>
				🗑
			</button>
		</div>
	);
};

export default Person;
