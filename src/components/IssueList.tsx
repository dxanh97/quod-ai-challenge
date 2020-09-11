import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai';

import { useSelector, useDispatch } from '../redux';
import { fetchIssues, highlightIssue } from '../redux/slice';
import {
  Wrapper,
  List,
  Item,
  HighlightStar,
  ItemHeader,
  ItemSubText,
  Button,
  ListContainer,
  Label,
  Dimmer,
  Rotate,
} from './styled';
import { Issue } from '../models/issue';

const IssueList: React.FC = () => {
  const dispatch = useDispatch();

  const issueList = useSelector((state) => state.issueList);
  const highlightingIssueId = useSelector((state) => state.highlightingIssueId);
  const handleItemClick = useCallback(
    (id: Issue['id']) => {
      dispatch(highlightIssue(id));
    },
    [dispatch],
  );
  const issueListNode = useMemo(
    () => (
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
    ),
    [issueList, highlightingIssueId, handleItemClick],
  );

  const getIssuesLoading = useSelector((state) => state.getIssuesLoading);
  const loadingIndicatorNode = useMemo(
    () => (
      <Dimmer active={getIssuesLoading}>
        <Rotate>
          <AiOutlineLoading3Quarters />
        </Rotate>
      </Dimmer>
    ),
    [getIssuesLoading],
  );

  const [pageIndex, setPageIndex] = useState(1);
  useEffect(() => {
    dispatch(fetchIssues(pageIndex));
  }, [dispatch, pageIndex]);
  const pagingNode = useMemo(
    () => (
      <>
        {pageIndex >= 1 && (
          <Button
            disabled={getIssuesLoading}
            onClick={(): void => setPageIndex((p) => p - 1)}
          >
            <AiOutlineArrowLeft />
            Previous
          </Button>
        )}
        <Button
          disabled={getIssuesLoading}
          onClick={(): void => setPageIndex((p) => p + 1)}
        >
          Next
          <AiOutlineArrowRight />
        </Button>
        <Label>{`Page: ${pageIndex}`}</Label>
      </>
    ),
    [pageIndex, getIssuesLoading],
  );

  return (
    <Wrapper>
      <ListContainer>
        {loadingIndicatorNode}
        {issueListNode}
      </ListContainer>
      {pagingNode}
    </Wrapper>
  );
};

export default IssueList;
