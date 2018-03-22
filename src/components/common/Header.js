import React from 'react';  
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<Link to="/">Home</Link> 
			<Link to="/women" >All Women</Link>
		</nav>
	)
};

export default Header; 