import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

describe('Main', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Main />));

    it('should render a <main />', () => {
        expect(wrapper.find('main').length).toEqual(1);
    })
})