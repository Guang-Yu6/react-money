import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #FFFFFF;
  border: 1px solid red;
  padding: 12px 16px;//上下左右
  > ol {
    margin: 0 -12px;  // 平均布局
    > li{
      background: wheat;//#d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size:14px;
      margin: 8px 12px; // 左右间距
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    margin-top: 8px;
    border-bottom: 1px solid rosybrown;
    color: #666;
  }
`;
const NotesSection = styled.section`
  border: 1px solid saddlebrown;
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center; // 上下备注2个字居中了
    > span{ // 备注惹
      margin-right: 16px;
      white-space: nowrap; // 防止伸缩变竖下来
    }
    > input{ // 输入框
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
const CategorySection = styled.section`
  border:1px solid red;
  font-size: 24px;
  > ul{
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center; // 居中于屏幕
      padding: 16px 0;
      position: relative;
      &.selected::after{//改成伪元素选择器
        //border-bottom: 3px solid #333; // 会添加多3px所以废弃
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
const NumberPadSection = styled.section`

`;

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>

      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </NotesSection>

      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>

      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>ok</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
