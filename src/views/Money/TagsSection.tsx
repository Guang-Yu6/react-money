import styled from 'styled-components';
import React, {useState} from 'react';

const _TagsSection = styled.section`
  background: #FFFFFF;
  border: 1px solid red;
  padding: 12px 16px;//上下左右
  // 分割线
  flex-grow: 1; // 尽量的高
  display: flex;
  flex-direction: column;//上下结构
  justify-content: flex-end; // 靠下
  align-items: flex-end;// 从左到右，靠右的意思，靠左就是start
  > ol {
    margin: 0 -12px;  // 平均布局
    > li{
      background: wheat;//#d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size:14px;
      margin: 8px 12px; // 左右间距
      &.selected {
        background: darkseagreen;
      }
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

const TagsSection:React.FC = (props) => {
  //      读     写               类型                   值
  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  //          读          写                 类型              值
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为？')
    if(tagName!==null){
      setTags([...tags,tagName])  // 拷贝之前的，换成新的
    }
  };

  const onToggleTag = (XXX:string)=> {
    const index = selectedTags.indexOf(XXX)
    if(index >=0){  // 如果下标大于0，证明就有后面的 0 1 2 3 .....，就是已被选中的意思
      setSelectedTags(selectedTags.filter(BBB => BBB !== XXX))  // 如果 tag 已被选中，就复制所有没有被选中的tag，作为新的 selectedTag
    }else{  // 如果没有被选中
      setSelectedTags([...selectedTags,XXX])
    }
  }

  function xxx(cc:string,hg:string){
     console.log(cc,hg)
  }

  xxx('项','下标')

  return (
    <_TagsSection>
      <ol>
        {tags.map(XXX=>
          <li key={XXX} onClick={()=>{onToggleTag(XXX)}} className={selectedTags.indexOf(XXX)>=0 ? 'selected' : ''}>  {XXX}  </li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </_TagsSection>
  )
}

export {TagsSection}
