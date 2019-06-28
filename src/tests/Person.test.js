import React from 'react';
import { shallow, mount } from 'enzyme';
import Person from '../components/Person';

describe('Person', () => {
	it('should match the snapshot with all data passed in correctly', () => {
		const wrapper = shallow(
			<Person
				id={1}
				photo="url"
				name="Katie"
				quote="So cool"
				superlative="Most likely to be so cool"
				deleteStudent={jest.fn()}
			/>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('should call the deleteStudent prop when clicked', () => {
		const deleteStudentMock = jest.fn();

		const wrapper = mount(
			<Person
				id={1}
				photo="url"
				name="Katie"
				quote="So cool"
				superlative="Most likely to be so cool"
				deleteStudent={deleteStudentMock}
			/>
		);

		wrapper.find('.deleteBtn').simulate('click');

		expect(deleteStudentMock).toBeCalled();
	});
});
