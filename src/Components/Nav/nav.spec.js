import React from 'react';
import { shallow } from 'enzyme';
import Nav from './nav';

describe('Nav', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Nav />));

    it('should render a <nav />', () => {
        expect(wrapper.find('nav').length).toEqual(1);
    })
})