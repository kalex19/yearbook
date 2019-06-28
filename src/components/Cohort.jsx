import React from 'react';
import Person from './Person';
import '../styles/Cohort.css';

const Cohort = ({ staff, students, deleteStudent }) => {
	const person = staff.map(member => {
		return (
			<div className="card">
				<Person
					id={member.id}
					key={member.id}
					photo={member.photo}
					name={member.name}
					quote={member.quote}
					superlative={member.superlative}
				/>
			</div>
		);
	});
	const people = students.map(student => {
		return (
			<div className="card">
				<Person
					id={student.id}
					key={student.id}
					photo={student.photo}
					name={student.name}
					quote={student.quote}
					superlative={student.superlative}
					deleteStudent={deleteStudent}
				/>
			</div>
		);
	});
	return (
		<div className="cardContainer">
			{person}
			{people}
		</div>
	);
};

export default Cohort;
