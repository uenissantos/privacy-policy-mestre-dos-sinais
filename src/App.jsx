import * as Styled from './style'
import icone from './assets/icone.png'
import React, { useState } from "react";

function App() {



	const [email, setEmail] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
	window.location.href = `https://app.betserver.site/MESTREDOSSINAIS/create-free-user/${email}`;
	}



	const  redrectRegister = ()=>{
		window.location.href = `https://go.aff.7k-partners.com/akuxiqxp`;

	}


const redrectPrivacyPolicy=()=>{

	window.location.href = `https://doc-hosting.flycricket.io/mestre-dos-sinais-privacy-policy/35066c0c-6b12-4137-91d9-bd6f710fc73b/privacy`;



}

	return (
		<Styled.Styleshet >

                <img className='icone' src={icone} alt="icone" />

                  <p>1ª cadastre-se na casa de aposta abaixo,
				 caso ja tenha cadastro pular para segunda etapa</p>

                  <button type='button'  onClick={redrectRegister} className='button'>cadastrar na casa de aposta</button>

                  <p> 2ª  insira o mesmo email cadastrado na casa de aposta </p>

 <div className='form'>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
<p className='senha'> senha para usuario free : 12345678</p>
         <button  type='button'  onClick ={redrectPrivacyPolicy} className='termos'> POLITICA DE PRIVACIDADE  </button>

   {   email&& <p>Ao clicar em cadastrar você concordar com nossos termos.
</p>}


{


 email&&

		<button className='button' type="submit">Cadastrar</button>
}


 	</form>



		</div>





		</Styled.Styleshet>
	);
}

export default App;
