import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  //border:1px solid red;
  height: 100vh;
  display: flex;  // 默认左右结构
  flex-direction: column;  // 变成上下结构
  
`;
const Main = styled.div`
  //border: 1px solid aquamarine;
  flex-grow: 1;  // 让他尽量的高
  overflow: auto; //超出后滚动条
`;

const Layout =(props:any)=>{
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

export default Layout;
