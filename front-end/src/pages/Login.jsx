import React, { useState } from 'react';

function Login() {
  const [loginError] = useState(false);

  return (
    <>
      <form>
        <label htmlFor="email-input">
          Email
          <input
            data-testid="common_login__input-email"
            id="email-input"
            type="email"
            placeholder="email@trybeer.com"
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="common_login__input-password"
            id="password-input"
            type="password"
            placeholder="insira sua senha"
          />
        </label>

        <button
          type="submit"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>

        <button
          type="button"
          data-testid="common_login__button-register"
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
    </>
  );
}

export default Login;
