/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Button({children, onclick}) {
	const [isInstalled, setIsInstalled] = useState(false);
// eslint-disable-next-line no-self-assign
onclick=onclick;


	function handleClick() {
		if (isInstalled) {
			// O aplicativo já está instalado
			// Abra o aplicativo
			const appUri = `market://details?id=com.nathan.mestre_dos_sinais`;
			window.open(appUri);
		} else {
			// O aplicativo não está instalado
			// Redirecione para a loja de aplicativos
			const appUri = `https://play.google.com/store/apps/details?id=com.nathan.mestre_dos_sinais`;
			window.open(appUri);
		}
	}

	return (
		<div>
			<button onClick={onclick}>{children}</button>
		</div>
	);
}

export default Button;
