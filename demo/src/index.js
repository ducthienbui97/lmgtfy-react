import React, {Component} from 'react';
import {render} from 'react-dom';
import Lmgtfy from '../../src';
const App = () =>{
    return (
            <div>
                <div>
                    <Lmgtfy query="bing">Search "Bing" on "Google" in current Frame</Lmgtfy>
                </div>
                <div>
                    <Lmgtfy query="google" engine="bing">Search "Google" on "Bing" in current Frame</Lmgtfy>
                </div>
                <div>
                    <Lmgtfy query="duckduckgo" target="_blank"> Search "duckduckgo" on "Google" in new tab </Lmgtfy>
                </div>
            </div>
            );
}

render(<App/>, document.querySelector('#demo'))
