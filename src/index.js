import React from 'react';
import PropTypes from 'prop-types';

const map = {
            "google":"g",
            "bing":"b",
            "yahoo":"y",
            "aol":"a",
            "ask":"k",
            "duckduckgo":"d"
        };
export default class Lmgtfy extends React.Component{
    static propTypes = {
        query: PropTypes.string.isRequired,
        engine: PropTypes.string,
        target: PropTypes.string
    };
    static defaultProps ={
        engine: "google",
        target: "_self"
    };
    render(){
        const targetLink = "https://lmgtfy.com/?q="+ this.props.query+"&s="+map[this.props.engine];
        return  <a href = {targetLink} target={this.props.target}>
                    {this.props.children}
                </a>;
    }
}
