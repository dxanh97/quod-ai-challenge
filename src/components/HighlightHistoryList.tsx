import React from 'react';

import { useSelector } from '../redux';

import { List, Item, ItemHeader, ItemSubText, Wrapper, Badge } from './styled';

const HighlightHistoryList: React.FC = () => {
  const highlightHistory = useSelector((state) => state.highlightHistory);

  return (
    <Wrapper>
      <h1>
        Highlight History
        <Badge>{highlightHistory.length}</Badge>
      </h1>
      <List>
        {highlightHistory.map((instance) => (
          <Item key={instance.highlightTime}>
            <ItemHeader>
              {new Date(instance.highlightTime).toString()}
            </ItemHeader>
            <ItemSubText target="_blank" href={instance.issue.html_url}>
              {`#${instance.issue.id}`}
              <br />
              {instance.issue.title}
            </ItemSubText>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default HighlightHistoryList;
