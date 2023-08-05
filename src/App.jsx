import * as Styled from './style'
import icone from './assets/icone.png'
import React, { useState } from "react";

function App() {



	const [email, setEmail] = useState("");


	const  redrectRegister = ()=>{
		window.location.href = `https://go.aff.7k-partners.com/akuxiqxp`;

	}



	return (
		<Styled.Styleshet >

                <img className='icone' src={icone} alt="icone" />

                  <p>1ª cadastre-se na casa de aposta abaixo,
				 caso ja tenha cadastro pular para segunda etapa</p>

                  <button type='button'  onClick={redrectRegister} className='button'>cadastrar na casa de aposta</button>

                  <p> 2ª  insira o mesmo email cadastrado na casa de aposta </p>

 <div className='form'>
			<form >
				<input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
<p className='senha'> senha para usuario free : 12345678</p>
        <a  target='_blank' href="https://doc-hosting.flycricket.io/mestre-dos-sinais-privacy-policy/35066c0c-6b12-4137-91d9-bd6f710fc73b/privacy" rel="noreferrer">POLITICA DE PRIVACIDADE</a>

   {   email&& <p>Ao clicar em cadastrar você concordar com nossos termos.
</p>}


{


 email&&

		// eslint-disable-next-line react/jsx-no-target-blank
		<button className='button' type="button">   <a    target='_blank' href={`https://app.betserver.site/MESTREDOSSINAIS/create-free-user/${email}`}> Cadastrar</a></button>
}


 	</form>



		</div>





		</Styled.Styleshet>
	);
}

export default App;
