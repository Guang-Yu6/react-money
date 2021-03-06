import styled from 'styled-components';
import React, {useState} from 'react';
import {generateOutput} from './generateOutput';

const _NumberPadSection = styled.section`
  border: 1px solid whitesmoke;
  display: flex;
  flex-direction: column;  // 上下部剧
  > .output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right; // 字体靠右
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok{height: 128px;float: right;}
      &.zero{width: 50%;}
      &:nth-child(1){
        background: white;
      }
      &:nth-child(5){
        background: #E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background: #B8B8B8;
      }
      &:nth-child(12){
        background: #9A9A9A;
      }
      &:nth-child(14){
        background: #A9A9A9;
      }
    }
  }
`;

const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };



  return (
    <_NumberPadSection>
      <div className="output">{output}</div>
      <div className="pad clearfix" >
        <button data-index="1">1</button>
        <button data-index="2">2</button>
        <button data-index="3">3</button>
        <button data-index="s">删除</button>
        <button data-index="4">4</button>
        <button data-index="5">5</button>
        <button data-index="6">6</button>
        <button data-index="q">清空</button>
        <button data-index="7">7</button>
        <button data-index="8">8</button>
        <button data-index="9">9</button>
        <button data-index="ok" className="ok">ok</button>
        <button data-index="0" className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </_NumberPadSection>
  )

}

export {NumberPadSection}
