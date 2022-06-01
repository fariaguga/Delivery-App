import React, { useState } from 'react';
import styles from './styles.module.scss';

function SignUp() {
  const [registerError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.logo }>
        <h2>Cadastro</h2>
      </div>
      <form className={ styles.form }>
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="common_register__input-name"
            id="email-input"
            type="email"
            placeholder="email@trybeer.com.br"
          />
        </label>
        <label htmlFor="email-input">
          Login
          <input
            data-testid="common_register__input-email"
            id="email-input"
            type="email"
            placeholder="email@trybeer.com.br"
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="common_register__input-password"
            id="password-input"
            type={ showPassword ? 'password' : 'text' }
            placeholder="insira sua senha"
          />
          <button
            className={ styles.btnIcons }
            type="button"
            onClick={ () => handleShowPassword() }
          >
            <i className="bi bi-eye-slash-fill" />
          </button>
        </label>

        <button
          type="submit"
          data-testid="common_register__button-register"
          className={ styles.btnLogin }
        >
          CADASTRAR
        </button>

      </form>

      <p
        hidden={ !registerError }
        data-testid="common_register__element-invalid_register"
      >
        Mensagem de erro
      </p>
    </div>
  );
}

export default SignUp;
