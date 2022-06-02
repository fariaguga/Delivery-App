import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import Logo from '../../images/logo.png';
import api from '../../services/api';
import navigateByRole from '../../utils/definePermission';

function SignIn() {
  const MIN_PASS_LENGTH = 6;
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const validateInputs = useCallback(
    () => {
      const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/gm;

      if (emailRegex.test(email) && password.length >= MIN_PASS_LENGTH) {
        setDisableBtn(false);
      } else {
        setDisableBtn(true);
      }
    }, [email, password],
  );

  useEffect(() => {
    validateInputs();
  }, [email, password, validateInputs]);

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    api.post('/login', data)
      .then(({ data: { role } }) => {
        setLoginError(false);
        navigateByRole(role, navigate);
      })
      .catch(() => setLoginError(true));
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
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="common_login__input-password"
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
          data-testid="common_login__button-login"
          className={ styles.btnLogin }
          disabled={ disableBtn }
          onClick={ (e) => handleLogin(e) }
        >
          LOGIN
        </button>

        <button
          type="button"
          data-testid="common_login__button-register"
          className={ styles.btnRegister }
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>

      <p
        hidden={ !loginError }
        data-testid="common_login__element-invalid-email"
      >
        E-mail ou senha inválida
      </p>
    </div>
  );
}

export default SignIn;
