import React, { useState, useEffect, useCallback } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { useSelector, useDispatch } from '../redux';
import { fetchIssues, highlightIssue } from '../redux/slice';
import { List, Item, HighlightStar, ItemHeader, ItemSubText } from './styled';
import { Issue } from '../models/issue';

const IssueList: React.FC = () => {
  // prettier-ignore
  const {
    issueList,
    getIssuesLoading,
    highlightingIssueId,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [pageIndex, setPageIndex] = useState(1);
  useEffect(() => {
    dispatch(fetchIssues(pageIndex));
  }, [dispatch, pageIndex]);

  const handleItemClick = useCallback(
    (id: Issue['id']) => {
      dispatch(highlightIssue(id));
    },
    [dispatch],
  );

  return (
    <>
      {getIssuesLoading && 'loading...'}
      <List>
        {issueList.map((issue) => (
          <Item
            key={issue.id}
            onClick={() => handleItemClick(issue.id)}
            selected={issue.id === highlightingIssueId}
          >
            <HighlightStar>
              {highlightingIssueId === issue.id && <AiFillStar />}
              {highlightingIssueId !== issue.id && <AiOutlineStar />}
            </HighlightStar>
            <ItemHeader>{issue.title}</ItemHeader>
            <ItemSubText target="_blank" href={issue.html_url}>
              {`#${issue.id}`}
            </ItemSubText>
          </Item>
        ))}
      </List>
    </>
  );
};

export default IssueList;
