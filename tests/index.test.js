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
    it('should have target prop', () =>{
        const component = shallow (<Lmgtfy query="test" target="_blank">test link</Lmgtfy>);
        expect(component.instance().props.target).toEqual("_blank");
    });
    it('should have default engine prop', () => {
        const component = shallow (<Lmgtfy query="test">test link</Lmgtfy>);
        expect(component.instance().props.engine).toEqual("google");
    });
    it('should have default target prop', () => {
        const component = shallow (<Lmgtfy query="test">test link</Lmgtfy>);
        expect(component.instance().props.target).toEqual("_self");
    });
});
