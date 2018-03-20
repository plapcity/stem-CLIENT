// functional, staeless component. PRESENTATION COMPONENT

import React from 'react';
import PropTypes from 'prop-types';

const WomenList = ({women}) => {
	return (
		<ul className="list-group">
			{women.map(woman => 
				<li className="list-group-item" key={woman.id}>{woman.attributes.name}</li>
			)}
		</ul>
	)
};

WomenList.propTypes = {
	women: PropTypes.array.isRequired
}

export default WomenList;