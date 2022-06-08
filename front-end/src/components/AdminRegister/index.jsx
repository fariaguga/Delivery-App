import React, { useEffect, useState, useCallback } from 'react';
import styles from './styles.module.scss';
import {
  validateName,
  validateEmail,
  validatePassword } from '../../utils/validateRegister';
import api from '../../services/api';
import { getLocalStorage } from '../../utils/localStorage';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [role, setRole] = useState('Vendedor');

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
  }, [name, email, password, role, enableButton]);

  const handleClick = (e) => {
    e.preventDefault();
    const { token } = getLocalStorage('user');
    const config = {
      headers: {
        authorization: token,
      },
    };
    const data = {
      name,
      email,
      password,
      role,
    };
    api.post('/admin/manage', data, config)
      .then(() => {
        setName('');
        setEmail('');
        setPassword('');
        setRole('Vendedor');
      })
      .catch((error) => {
        setName('');
        setEmail('');
        setPassword('');
        setRegisterError(false);
        setRole('Vendedor');
        console.log(error);
      });
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.title }>
        <h2>Cadastrar Novo Usuário</h2>
      </div>
      <form className={ styles.form }>
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="admin_manage__input-name"
            id="email-input"
            type="text"
            placeholder="Nome e sobrenome"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            data-testid="admin_manage__input-email"
            id="email-input"
            type="email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="admin_manage__input-password"
            id="password-input"
            placeholder="*********"
            type={ showPassword ? 'password' : 'text' }
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

        <label htmlFor="role-input">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            id="role-input"
            j
            value={ role }
            onChange={ ({ target }) => setRole(target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Cliente</option>
          </select>

        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
          className={ styles.btnLogin }
          disabled={ !isDisabled }
          onClick={ (e) => handleClick(e) }
        >
          CADASTRAR
        </button>

      </form>

      <p
        hidden={ registerError }
        data-testid="admin_manage__element-invalid-register"
      >
        Usuário já existe!
      </p>
    </div>
  );
}

export default SignUp;
