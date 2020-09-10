import styled, { css } from 'styled-components';

export const List = styled.ul`
  padding: 8px;
  margin: 0;
  list-style-type: none;
`;

export const Item = styled.li`
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
  ${(props: { selected?: boolean }) =>
    props.selected &&
    css`
      opacity: 1;
      color: #6435c9;
      border-color: #6435c96e;
      background-color: #6435c90d;
    `}
`;

export const ItemHeader = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 6px;
`;

export const ItemSubText = styled.a`
  margin: 0;
  text-decoration: none;
  color: #000000;
  &:hover {
    color: #0366d6;
    text-decoration: underline;
  }
`;

export const HighlightStar = styled.div`
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
