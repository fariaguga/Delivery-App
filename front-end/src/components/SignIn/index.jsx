import React, { useState } from 'react';
import styles from './styles.module.scss';
import Logo from '../../images/logo.png';

function SignIn() {
  const [loginError] = useState(false);
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
        <img src={ Logo } alt="logo" />
        <h2>DRINKS APP</h2>
      </div>
      <form className={ styles.form }>
        <label htmlFor="email-input">
          Login
          <input
            data-testid="common_login__input-email"
            id="email-input"
            type="email"
            placeholder="email@trybeer.com.br"
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="common_login__input-password"
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
          data-testid="common_login__button-login"
          className={ styles.btnLogin }
        >
          LOGIN
        </button>

        <button
          type="button"
          data-testid="common_login__button-register"
          className={ styles.btnRegister }
        >
          Ainda não tenho conta
        </button>
      </form>

      <p
        hidden={ !loginError }
        data-testid="common_login__element-invalid-email"
      >
        Mensagem de erro
      </p>
    </div>
  );
}

export default SignIn;
