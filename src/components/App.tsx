import React from 'react';

import IssueList from './IssueList';
import HighlightHistoryList from './HighlightHistoryList';
import { FlexWrapper, FlexChildHalf } from './styled';

const App: React.FC = () => {
  return (
    <FlexWrapper>
      <FlexChildHalf>
        <IssueList />
      </FlexChildHalf>
      <FlexChildHalf>
        <HighlightHistoryList />
      </FlexChildHalf>
    </FlexWrapper>
  );
};

export default App;
