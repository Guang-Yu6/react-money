import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const _NotesSection = styled.section`
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


const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return (
    <_NotesSection>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </_NotesSection>
  );
};

export {NoteSection};
