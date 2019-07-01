/*
import app
import shallow/mount from enzyme
import react 

describe app block
let wrapper

beforeeach:


it should match snapshot



*/

import App from '../components/App';
import React from 'react';
import { shallow } from 'enzyme';
import people from '../data/yearbook-data';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('constructor', () => {
		it('should match initial state', () => {
			// const expected = { staff: people.staff, students: people.students };
			// expect(wrapper.state()).toEqual(expected);
			expect(wrapper.state('staff')).toEqual(people.staff);
			expect(wrapper.state('students')).toEqual(people.students);
		});
	});
	describe('addStudent', () => {
		it('should add newStudent to state when addStudent is called', () => {
			const mockNewStudent = {
				id: people.students.length + 1,
				name: 'JK',
				photo: 'fakeurl.com',
				quote: 'pink',
				superlative: 'most likely to be a cat'
			};

			wrapper.instance().addStudent(mockNewStudent);

			expect(wrapper.state('students')).toEqual([ ...people.students, mockNewStudent ]);
		});
	});
	describe('deleteStudent', () => {
		it('should remove student from state when deleteStudent is called', () => {
			const mockId = 13;
			const expected = people.students.filter(student => student.id !== mockId);

			wrapper.instance().deleteStudent(mockId);

			expect(wrapper.state('students')).toEqual(expected);
		});
	});
});
