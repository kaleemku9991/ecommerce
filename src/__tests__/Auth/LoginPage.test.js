import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/Auth/LoginPage';

describe('LoginPage Component', () => {
  it('should render login form', () => {
    const component = shallow(<LoginPage />);
    const form = component.find('form');
    expect(form.length).toBe(1);
  });

  it('should have email and password fields', () => {
    const component = shallow(<LoginPage />);
    const emailField = component.find('input[type="email"]');
    const passwordField = component.find('input[type="password"]');
    expect(emailField.length).toBe(1);
    expect(passwordField.length).toBe(1);
  });
});
