import React from 'react'
import "./css/barger.css";

function BargerButton({selected,onClick,cName}) {
	const isSelected = selected?"bb-btn-open":"bb-btn-close";
	const switchClass = `barger-btn ${isSelected} ${cName}`
	const handleClick = ()=>{
		onClick(!selected)
	}
	return (
		<div className={switchClass} onClick={handleClick}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default React.memo(BargerButton);




