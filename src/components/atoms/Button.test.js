import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const title = 'Next';
let wrapped = shallow(<Button title={title} />);

describe('Button', () => {
  it('should render the Button Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the Button named `Next`', () => { 
    expect(wrapped.text()).toEqual(title);
  });
});