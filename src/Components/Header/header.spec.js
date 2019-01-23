import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Header />));

    it('should render a <header />', () => {
        expect(wrapper.find('header').length).toEqual(1);
    })
})