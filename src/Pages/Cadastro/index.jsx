import React, { useState } from 'react';
import './styles/style.css';
import { Link } from 'react-router-dom';

import { CgProfile } from 'react-icons/cg';
import { MdMarkunreadMailbox, MdOutlineCancel } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';
import { CiCircleQuestion } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';
import { FaEye, FaCheck, FaArrowRight } from 'react-icons/fa';

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [levelPassword, setLevelPassword] = useState(0);

  const [icon, setIcon] = useState(CiCircleQuestion);

  function submitForm() {
    if (password !== confirmPassword) {
      alert('As senhas não são iguais');
    }
  }

  function checkPassword(e) {
    const value = e.target.value;
    let validNumber = false
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = 0; i < numbers.length; i++) {
      if (value.includes(numbers[i])) {
        validNumber = true;
        break;
      }
    }
 
    if (value.length >= 8 && !validNumber) {
      setLevelPassword(1);
    } else if (validNumber && value.length >= 8){
      setLevelPassword(2);
    }
    
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Sign up</h1>
          <span>Secure your Communication with Easymail</span>

          <form action="#" onSubmit={(e) => e.preventDefault}>
            <div className="input">
              <CgProfile id="icon-input" />
              <input
                type="text"
                placeholder="Digite seu nome"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
              <div>{icon}</div>
            </div>
            <div className="input">
              <MdMarkunreadMailbox id="icon-input" />
              <input type="text" placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <CiCircleQuestion />
            </div>
            <div className="input" style={{
              borderColor: levelPassword === 0 ? 'red' : levelPassword === 1 ? 'yellow' : 'green'
            }}>
              <RiLockPasswordFill id="icon-input" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                onChange={(e) => checkPassword(e)}
              />
              <button onClick={(e) => setShowPassword(!showPassword)}>
                <FaEye />
              </button>
            </div>
            <div className="conditions-password">
              <ul>
                <li>
                  <GoDotFill /> 8 caracteres
                </li>
                <li>
                  <GoDotFill /> Contenha numeros (0-9)
                </li>
                <li>
                  <GoDotFill /> Contem caracteres especiais
                </li>
              </ul>
            </div>
            <div className="input">
              <RiLockPasswordFill id="icon-input" />
              <input type="text" placeholder="Digite novamente sua senha" 
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <a className="button-submit"
              onClick={submitForm}
            >
              Cadastro{' '}
              <span>
                <FaArrowRight />
              </span>
            </a>
            <p className="back">
              Already account?{' '}
              <Link className="backLogin" to="/">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
