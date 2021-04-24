import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './icon';


const NavWrapper = styled.nav`
  //border: 1px solid blue;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
      display: flex;
    > li{
      width: 33.333333%;  // 分开他们3个标签
      text-align: center;   // 字居中
      display: flex;
      flex-direction: column;//shang xia 
      padding: 4px 0;
      align-items: center; // 居中
      .icon {
          width: 24px;
          height: 24px;
      }
    }
  }
`;

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tags"/>
          <Link to="tags">标签页</Link>
        </li>

        <li>
          <Icon name="money"/>
          <Link to="/money">记账页</Link>
        </li>

        <li>
          <Icon name="statistics"/>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;
