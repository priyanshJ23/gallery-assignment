import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;



export const Heading = () => {

  return (
    <Header>
      <H1>React Gallery</H1>
      <p>Make Your own Gallery</p>
      <p>Choose a picture you want to add</p>
    </Header>
  )
}