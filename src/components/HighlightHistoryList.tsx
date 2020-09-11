import React from 'react';

import { useSelector } from '../redux';

import { List, Item, ItemHeader, ItemSubText, Wrapper, Badge } from './styled';

const HighlightHistoryList: React.FC = () => {
  const highlightHistory = useSelector((state) => state.highlightHistory);
  // const issueList = useSelector((state) => state.issueList);

  return (
    <Wrapper>
      <h1>
        Highlight History
        <Badge>{highlightHistory.length}</Badge>
      </h1>
      <List>
        {highlightHistory.map((instance) => (
          <Item key={instance.highlightTime}>
            <ItemHeader>{instance.issueId}</ItemHeader>
            <ItemSubText>{`#${instance.issueId}`}</ItemSubText>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default HighlightHistoryList;
