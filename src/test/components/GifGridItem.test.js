import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'


describe('Pruebas Gif Grid Item', () => {
    test('Debe mostar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem />);
    });
});
