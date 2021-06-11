import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {NoteSection} from './Money/NotesSection';

const MyLayout = styled(Layout)`
  border: 1px solid darkseagreen;
  display: flex;
  flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NoteSection/>
      <CategorySection>

      </CategorySection>
      <NumberPadSection>

      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;
