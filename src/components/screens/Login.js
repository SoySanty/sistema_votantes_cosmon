import React from "react";
import "../styles/screens/login.css";
import { ReactComponent as EleccionesSvg } from "../img/elecciones.svg";

const LoginForm = () => {
  return (
    <>
      <p className="login-subtitle">Iniciar Sesión</p>
      <form action="#" method="POST" className="login-form">
        <input type="text" name="" placeholder="Código de socio" required />
        <input type="password" name="" placeholder="Contraseña" required />
        <input
          type="submit"
          value="Iniciar sesión"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
        />
      </form>
    </>
  );
};

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Sistema de elecciones</h1>
      <div className="login">
        <div className="img-container">
          <EleccionesSvg />
        </div>

        <LoginForm />
      </div>
      <p className="bottom-text">Cooperativa Montes Claros R.L.</p>
    </div>
  );
};

export default Login;
