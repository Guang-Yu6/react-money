import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';


const NavWrapper = styled.nav`
  background: white;
  border: 1px solid blue;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
      display: flex;
    > li{
      width: 33.333333%;  // 分开他们3个标签
      text-align: center;   // 字居中
      > a{
      display: flex;
      flex-direction: column;//shang xia 
      padding: 4px 0;
      align-items: center; // 居中
      .icon {
          width: 24px;
          height: 24px;
      }
      &.selected{ // 被选中后干啥
        color: darkred;
      }
      }
    }
  }
`;

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="tags" activeClassName="selected">
            <Icon name="tags"/>
            标签页
          </NavLink>
        </li>

        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账页
          </NavLink>
        </li>

        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;
