import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
// import Input from '../../components/Input';
// import Button from '../../components/Button';


const Home: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Micro"/>

      <a href="logIn">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>

  </Container>
);

export default Home;
