import React, { useState } from 'react';

import Button from './butondirect'
function Dialog({url}) {
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="dialog">
      <header className="dialog-header">
        {showText ? (
          <p>Você será direcionado para a página de login, sua senha é 12345678</p>
        ) : <p>Certifique-se de ter usado o mesmo e-mail, para evitar problemas</p>}
        <button onClick={handleButtonClick}>
          {showText ? 'Fechar Diálogo' : 'Abrir Diálogo'}
        </button>


<Button>  </Button>

      </header>
    </div>
  );
}

export default Dialog;
