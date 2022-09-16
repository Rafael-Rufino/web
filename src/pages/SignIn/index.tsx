/* eslint-disable import/first */

import React from 'react';
import { createComponent } from '@lit-labs/react';

import {Heading, Input, Button,LinkIcon, CheckText} from '@rafael-rufino/web-components-with-litelement-publish-in-npm';

import { Container, Wrapper } from './styles';

const HeadingApp = createComponent(React, 'heading-app', Heading);
const InputApp = createComponent(React, 'input-app', Input);
const ButtonApp = createComponent(React, 'button-app', Button);
const LinkIconApp = createComponent(React, 'linkicon-app', LinkIcon);
const CkeckTextApp= createComponent(React, 'checktext-app', CheckText);

import lockImg from '../../assets/lock.svg';

export const SignIn = () => {
  return (
    <Container>
        <Wrapper>
        <HeadingApp title="Acessando sua conta" description='Informe seu login e senha para continuar' />
        <InputApp label='Seu login' placeholder="E-mail, CPF, Usuário ou Celular" type='text'  onChange={() => {}}/>
        <InputApp label='Sua senha' placeholder="Digite a sua senha"  type='password' onChange={() => {}} />
        <CkeckTextApp name='Manter conectado' />
        <ButtonApp type='submit' name='Acessar sua conta' onClick={()=>{}}/>
            <LinkIconApp  src={lockImg} title="Você deseja redefinir a senha ?" href="https://www.gazin.com.br"  name='Esqueceu sua senha?'/>
        </Wrapper>
    </Container>
  )
}

