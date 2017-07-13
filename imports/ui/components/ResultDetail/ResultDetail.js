import React from 'react';
import PdfContent from '../PdfContent/PdfContent';


const ResultDetail = (props) => {
	return(
		<div>
			<h2>{props.contentData.judul}</h2>
			<p>Pengarang : {props.contentData.pengarang} </p>
			<p>File : {props.contentData.file} </p>
			<PdfContent 
				result={props.contentData.file} />
		</div>
	);	
};

export default ResultDetail;