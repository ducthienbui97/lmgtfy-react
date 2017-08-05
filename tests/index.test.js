import React from 'react';
import Lmgtfy from '../src';
import expect from 'expect';
import { shallow, render, mount } from 'enzyme';

describe('Props test', () => {
    it('should have query prop', () => {
        const component = shallow (<Lmgtfy query='test' >test link</Lmgtfy>);
        expect(component.instance().props.query).toEqual('test');
    });
    it('should have engine prop', () => {
        const component = shallow (<Lmgtfy query='test' engine = 'ask' >test link</Lmgtfy>);
        expect(component.instance().props.engine).toEqual('ask');
    });
    it('should have default engine prop', () => {
        const component = shallow (<Lmgtfy query='test'>test link</Lmgtfy>);
        expect(component.instance().props.engine).toEqual('google');
        expect(component.instance().props.engine).toNotEqual('bing');
    });
    it('should pass children prop', () => {
        const component = shallow (<Lmgtfy query='test'>test link</Lmgtfy>);
        expect(component.text()).toEqual('test link');
    });
});

describe('Test render', () => {
    it('should render with <a> tag with default props', () => {
        const component = mount (<Lmgtfy query='test'>test</Lmgtfy>);
        expect(component.contains(<a href='https://lmgtfy.com/?q=test&s=g' >test</a>)).toEqual(true);
    });
    it('should pass unused props to <a> tag', () => {
        const component = mount (<Lmgtfy query='test' target='_blank' type='text/html'>test</Lmgtfy>);
        expect(component.contains(<a href='https://lmgtfy.com/?q=test&s=g' target='_blank' type='text/html'>test</a>)).toEqual(true);
    });
    it('should render with <a> tag with new engine prop', () => {
        const component = mount (<Lmgtfy query='test' engine='bing'>test</Lmgtfy>);
        expect(component.contains(<a href='https://lmgtfy.com/?q=test&s=b' >test</a>)).toEqual(true);
    });
});
