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
    };
    static defaultProps ={
        engine: "google",
    };
    render(){
        const {query,engine,children,...other} = this.props;
        const targetLink = "https://lmgtfy.com/?q="+ query+"&s="+map[engine];
        return  <a href = {targetLink} {...other}>
                    {children}
                </a>;
    }
}
