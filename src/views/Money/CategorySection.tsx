import styled from 'styled-components';
import React, {useState} from 'react';

const _CategorySection = styled.section`
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


const CategorySection: React.FC = () => {
  const categoryMap = {'-':'支出','+':'收入'};
  const [categoryList] = useState<('+' | '-')[]>(['-','+'])
  const [category,setCategory] = useState('-')
  return (
    <_CategorySection>
      <ul>
        {categoryList.map(c=>
          <li key={c} className={category === c ? 'selected' : ''}
              onClick={()=>{setCategory(c)}}
          >{categoryMap[c]}</li>
        )}

      </ul>
    </_CategorySection>
  )
}
export {CategorySection}
