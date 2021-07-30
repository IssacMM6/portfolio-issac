import React from 'react'
import './css/underline_label.css';

function UnderlineLabel({wLength,strokeWidth,fontSize,cName,children}) {
	const container = {
		width:wLength
	}
	const content = {
		padding:"0.5rem 0.7rem",
		width:"max-content",
		fontSize: fontSize
	}
	const underlineStyle = {
		width:"100%",
		height:strokeWidth,
		backgroundColor:"black"
	}
	const classStyle = `u-label ${cName}`
	return (
		<div className={classStyle} style={container}>
			<div style={content}>{children}</div>
			<div className="u-underline" style={underlineStyle}></div>
		</div>
	)
}

export default React.memo(UnderlineLabel)
