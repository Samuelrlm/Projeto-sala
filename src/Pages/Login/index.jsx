import React from 'react';
import './styles/style.css';
import Input from './components/Input';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <>
      <div className="container">
        <section className="login-card">
          <div className="login">
            <div className="oauth">
              <ul>
                <li className="facebook">
                  <a href="#">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li className="google">
                  <a href="#">
                    <FaGoogle /> Google
                  </a>
                </li>
              </ul>
            </div>
            <div className="divisor">
              <div className="line"></div>
              <div className="or">ou</div>
              <div className="line"></div>
            </div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <h1>Sign in manually</h1>
              <div className="inputs-fields">
                <Input nomeLabel="email" placeholder={'Digite seu email'} />
                <Input nomeLabel="senha" placeholder={'Digite sua senha'} />
              </div>

              <div className="input-checkbox">
                <input type="checkbox" id="checkbox" />
                <p htmlFor="checkbox">Remember me</p>
              </div>
              <button>Login!</button>
              <Link id="link" to="/Cadastro">
                Cadastro
              </Link>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
