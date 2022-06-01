import React, { useEffect, useState, useCallback } from 'react';
import styles from './styles.module.scss';
import {
  validateName,
  validateEmail,
  validatePassword } from '../../utils/validateRegister';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const enableButton = useCallback(() => {
    if (validateName(name) && validateEmail(email) && validatePassword(password)) {
      console.log('vai');
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [name, email, password]);

  useEffect(() => {
    enableButton();
  }, [name, email, password, enableButton]);

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
            type="text"
            placeholder="email@trybeer.com.br"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            data-testid="common_register__input-email"
            id="email-input"
            type="email"
            placeholder="email@trybeer.com.br"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="common_register__input-password"
            id="password-input"
            type={ showPassword ? 'password' : 'text' }
            placeholder="insira sua senha"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
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
          disabled={ !isDisabled }
          onClick={ () => handleClick() }
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
