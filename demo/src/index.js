import React, {Component} from 'react';
import {render} from 'react-dom';
import Lmgtfy from '../../src';

render(<Lmgtfy query="google" engine="bing">Search "Google" on "Bing"</Lmgtfy>, document.querySelector('#demo'))
