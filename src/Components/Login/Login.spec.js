import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Login />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
})