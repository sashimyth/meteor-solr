import React from 'react';
import PdfContent from '../PdfContent/PdfContent';


const ResultDetail = (props) => {
	return(
		<div>
		<h2> {props.contentData.judul} </h2>
		<table className="table">
		
		    
		    <tbody>
		      <tr>
		        <td> <b> Pengarang </b> </td>
		        <td>{props.contentData.pengarang}</td>
		        
		      </tr>
		      <tr>
		        <td> <b> Subyek </b></td>
		        <td>{props.contentData.subyek}</td>
		        
		      </tr>
		      <tr>
		        <td><b> Klasifikasi </b></td>
		        <td>{props.contentData.klasifikasi}</td>
		        
		      </tr>
		      <tr>
		        <td><b>Kota Terbit </b></td>
		        <td>{props.contentData.kota}</td>
		        
		      </tr>
		      <tr>
		        <td><b>Tahun </b></td>
		        <td>{props.contentData.tahun}</td>
		        
		      </tr>
		      <tr>
		        <td><b>Penerbit </b></td>
		        <td>{props.contentData.penerbit}</td>
		      </tr>

		      <tr>
		      	<td></td>
		      	<td></td>
		      </tr>
		      
		    </tbody>
		  </table>
			<PdfContent 
				result={props.contentData.file} />
		</div>
	);	
};

export default ResultDetail;