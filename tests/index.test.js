import React from 'react';
import Lmgtfy from '../src';
import expect from 'expect';
import { shallow, render, mount } from 'enzyme';

describe('Props test', () => {
    it('should have query prop', () => {
        const component = shallow (<Lmgtfy query="test" >test link</Lmgtfy>);
        expect(component.instance().props.query).toEqual("test");
    });
    it('should have engine prop', () => {
        const component = shallow (<Lmgtfy query="test" engine = "ask" >test link</Lmgtfy>);
        expect(component.instance().props.engine).toEqual("ask");
    });
});