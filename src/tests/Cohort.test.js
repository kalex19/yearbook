import React from 'react';
import { shallow } from 'enzyme';
import Cohort from '../components/Cohort';

describe('Cohort', () => {
	let wrapper;
	let mockStaff = [
		{
			name: 'JK',
			photo: 'fakeurl.com',
			quote: 'pink',
			superlative: 'most likely to be a cat'
		},
		{
			name: 'AL',
			photo: 'fakeurl.com',
			quote: 'pink',
			superlative: 'most likely to be a cat'
		},
		{
			name: 'MG',
			photo: 'fakeurl.com',
			quote: 'pink',
			superlative: 'most likely to be a cat'
		}
	];
	let mockStudents = [
		{
			name: 'PR',
			photo: 'fakeurl.com',
			quote: 'pink',
			superlative: 'most likely to be a cat'
		},
		{
			name: 'FV',
			photo: 'fakeurl.com',
			quote: 'pink',
			superlative: 'most likely to be a cat'
		},
		{
			name: 'RT',
			photo: 'fakeurl.com',
			quote: 'pink',
			superlative: 'most likely to be a cat'
		}
	];
	let mockDeleteStudent = jest.fn();

	beforeEach(() => {
		wrapper = shallow(<Cohort staff={mockStaff} students={mockStudents} deleteStudent={mockDeleteStudent} />);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
