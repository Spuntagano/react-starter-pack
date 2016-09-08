import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends React.Component {

	constructor(props) {
	  	super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
	}

  	render() {
		return (
			<div>
			</div>
		);
  	}
}

export default Header;


