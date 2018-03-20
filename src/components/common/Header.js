import React, {PropTypes} from 'react';  
import { BrowserRouter as Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>		|
			<Link to="/" activeClassName="active">Home</Link>
			<Link to="/women" activeClassName="active">All Women</Link>
		</nav>
	)
};

export default Header; 