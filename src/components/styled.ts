import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
`;

export const ListContainer = styled.div`
  position: relative;
`;

export const List = styled.ul`
  padding: 0;
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

export const Dimmer = styled.div`
  position: absolute;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  background-color: rgba(255, 255, 255, 0.55);
  z-index: 100;
  display: none;
  ${(props: { active: boolean }) =>
    props.active &&
    css`
      display: initial;
    `};
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
export const Rotate = styled.div`
  display: inline-flex;
  animation: ${rotate} 1s linear infinite;
  font-size: 30px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`;

export const Label = styled.span`
  display: inline-block;
  vertical-align: baseline;
  font-weight: 700;
  color: #a333c8;
  font-size: 16px;
  margin-left: 10px;
`;

export const Button = styled.button`
  background-color: #a333c8;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  border: none;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  padding: 10px 16px;
  margin-right: 4px;
  font-size: 16px;
  font-family: 'Inconsolata';
  & svg {
    vertical-align: text-top;
    margin: 0 4px;
  }
`;

export const FlexWrapper = styled.div`
  display: inline-flex;
  width: 100%;
`;
export const FlexChildHalf = styled.div`
  width: 50%;
`;

export const Badge = styled.span`
  color: #ffffff;
  padding: 4px 10px;
  background-color: #a333c8;
  font-size: 20px;
  border-radius: 12px;
  margin: 0px 8px;
  position: absolute;
`;
