import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('Footer', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Footer />));

    it('should render a <footer />', () => {
        expect(wrapper.find('footer').length).toEqual(1);
    })
})