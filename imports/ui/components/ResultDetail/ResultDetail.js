import React from 'react';

const ResultDetail = (props) => {
	return(
		<div>
			<h2>{props.contentData.judul}</h2>
			<p>Pengarang : {props.contentData.pengarang} </p>
			<p>File : {props.contentData.file} </p>
		</div>
	);	
};

export default ResultDetail;