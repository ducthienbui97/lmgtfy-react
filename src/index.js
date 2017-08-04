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
        engine: PropTypes.string
    };
    static defaultProps ={
        engine: "google"
    };
	render(){
		const target = "http://lmgtfy.com/?q="+ this.props.query+"&s="+map[this.props.engine];
		console.log(target);
		return 	<a href = {target}> 
					{this.props.children}
				</a>;
	
	}
}
