import React from 'react';
import styled, { css } from 'react-emotion';

const Wrapper = styled('div')`
  display: flex;
  height: 100%;
`;

const NavBar = styled('div')`
  float: left;
  width: 280px;
  height: 100%;
`;

const MainContent = styled('div')`
  width: 100%;
  height: 100%;
`;

const ContentImg = styled('div')`
  background-image: url('imgs/mchale.jpeg');
  width: 50%;
  height: 50%;
`;

class App extends React.Component {
   render() {
      return (
        <Wrapper>
          <NavBar>
            This is a test navbar.
          </NavBar>
          <MainContent>
            <p>This is text. This is text.This is text.This is text.This is text.This is text.</p>
            <ContentImg />
          </MainContent>
        </Wrapper>
      );
   }
}
export default App;