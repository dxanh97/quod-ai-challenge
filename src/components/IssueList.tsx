import React, { useState, useEffect, useCallback } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled, { css } from 'styled-components';

import { useSelector, useDispatch } from '../redux';
import { fetchIssues, highlightIssue } from '../redux/slice';
import { Issue } from '../models/issue';

const List = styled.ul`
  padding: 8px;
  margin: 0;
  list-style-type: none;
`;
interface ItemProps {
  selected?: boolean;
}
const Item = styled.li`
  position: relative;
  cursor: pointer;
  padding: 10px;
  padding-right: 40px;
  border-radius: 8px;
  margin-bottom: 6px;
  border: 2px solid;
  border-color: #2224263b;
  opacity: 0.65;
  &:hover {
    opacity: 1;
  }
  ${(props: ItemProps) =>
    props.selected &&
    css`
      color: #6435c9;
      border-color: #6435c96e;
      opacity: 1;
      background-color: #6435c90d;
    `}
`;
const ItemHeader = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 6px;
`;
const ItemSubText = styled.a`
  margin: 0;
  text-decoration: none;
  color: #000000;
  &:hover {
    color: #0366d6;
    text-decoration: underline;
  }
`;
const HighlightStar = styled.div`
  float: right;
  border: none;
  background: none;
  font-size: 24px;
  padding: 0;
  & svg {
    color: #6435c9;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;

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
