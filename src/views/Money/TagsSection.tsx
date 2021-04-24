import styled from 'styled-components';

const TagsSection = styled.section`
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


export {TagsSection}
