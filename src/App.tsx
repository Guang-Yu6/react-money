import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import styled from 'styled-components';
import Nav from './components/Nav';

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


function App() {
  return (
    <Router>
      <Wrapper>

        <Main><Switch>
          <Route path="/tags">
            <Tags />
          </Route>

          <Route path="/money">
            <Money/>
          </Route>

          <Route path="/statistics">
            <Statistics />
          </Route>

          <Redirect exact from='/' to="/money"/>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch></Main>

        <Nav/>


      </Wrapper>
    </Router>
  );
}

function NoMatch(){
  return (
    <div>页面不存在</div>
  )
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

export default App;
